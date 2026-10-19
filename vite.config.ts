import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  for (const [key, value] of Object.entries(env)) {
    if (process.env[key] === undefined) process.env[key] = value
  }

  return {
    plugins: [
      react(),
      {
        name: 'api-serverless-dev',
        configureServer(server) {
          server.middlewares.use(async (req, res, next) => {
            const url = req.url || ''
            const path = new URL(url, 'http://localhost').pathname
            if (path === '/api/chat') {
              try {
                const handlerModule = await import('./api/chat.js')
                const handler = handlerModule.default

                let body = ''
                for await (const chunk of req) {
                  body += chunk
                  if (Buffer.byteLength(body) > 1048576) {
                    res.statusCode = 413
                    res.setHeader('Content-Type', 'application/json')
                    return res.end(JSON.stringify({ error: 'Request payload too large.' }))
                  }
                }

                let parsedBody = {}
                if (body) {
                  try {
                    parsedBody = JSON.parse(body)
                  } catch {
                    res.statusCode = 400
                    res.setHeader('Content-Type', 'application/json')
                    return res.end(JSON.stringify({ error: 'Invalid JSON payload.' }))
                  }
                }

                const fakeReq = {
                  method: req.method,
                  url: req.url,
                  headers: req.headers,
                  query: Object.fromEntries(new URL(req.url, 'http://localhost').searchParams),
                  body: parsedBody,
                }

                const fakeRes = {
                  setHeader(k: string, v: string) {
                    res.setHeader(k, v)
                  },
                  status(code: number) {
                    res.statusCode = code
                    return {
                      json(data: unknown) {
                        res.setHeader('Content-Type', 'application/json')
                        res.end(JSON.stringify(data))
                      },
                      end() {
                        res.end()
                      },
                    }
                  },
                }

                await handler(fakeReq, fakeRes)
              } catch (err) {
                res.statusCode = 500
                res.setHeader('Content-Type', 'application/json')
                res.end(JSON.stringify({ error: 'Internal server error processing chatbot request.' }))
              }
            } else {
              next()
            }
          })
        },
      },
    ],
  }
})

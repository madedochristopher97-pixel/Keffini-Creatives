// Vercel Serverless Function: /api/chat.js
// Proxies LLM requests to NVIDIA NIM API from the backend to bypass browser CORS

export default async function handler(req, res) {
  // CORS & Preflight headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed. Please use POST.' });
  }

  let body = req.body;
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch {
      return res.status(400).json({ error: 'Invalid JSON payload.' });
    }
  }

  const { messages, model, temperature, max_tokens, stream } = body || {};

  if (!messages || !Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: 'Invalid request: "messages" array is required.' });
  }

  // Check backend env or authorization header forwarded from client
  const authHeader = req.headers.authorization || '';
  const bearerToken = authHeader.startsWith('Bearer ') ? authHeader.slice(7).trim() : '';

  const apiKey = (
    process.env.NVIDIA_API_KEY ||
    process.env.VITE_NVIDIA_API_KEY ||
    bearerToken ||
    ''
  ).trim();

  if (!apiKey) {
    return res.status(401).json({ error: 'NVIDIA API key not configured on server or in request.' });
  }

  const selectedModel = (
    model ||
    process.env.NVIDIA_MODEL ||
    process.env.VITE_NVIDIA_MODEL ||
    'meta/llama-3.2-11b-vision-instruct'
  ).trim();

  const baseUrl = (
    process.env.NVIDIA_BASE_URL ||
    process.env.VITE_NVIDIA_BASE_URL ||
    'https://integrate.api.nvidia.com/v1'
  ).trim().replace(/\/+$/, '');

  try {
    const upstream = await fetch(`${baseUrl}/chat/completions`, {
      signal: AbortSignal.timeout(35000),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: selectedModel,
        messages,
        temperature: temperature !== undefined ? temperature : 0.3,
        max_tokens: max_tokens || 800,
        stream: false,
      }),
    });

    if (!upstream.ok) {
      const errorText = await upstream.text();
      return res.status(upstream.status).json({
        error: `NVIDIA NIM API Error (${upstream.status}): ${errorText}`,
      });
    }

    const data = await upstream.json();
    return res.status(200).json(data);
  } catch (err) {
    console.error('NVIDIA NIM API proxy exception:', err);
    return res.status(500).json({ error: `Internal error communicating with NVIDIA NIM: ${err.message}` });
  }
}

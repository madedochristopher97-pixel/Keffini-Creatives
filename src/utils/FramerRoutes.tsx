import { useMemo, type ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
// @ts-ignore - Framer runtime (JS); RouterAPIProvider is exported by our patch at the bottom of the file
import { RouterAPIProvider } from '../components/framer/_framer-runtime.js'

/**
 * Framer components resolve their page links (`{ webPageId }`) through a route table. The export has no
 * router, so every footer / button link rendered with no href. This provides that table and maps the
 * Framer page ids to this app's React Router paths.
 */
const ROUTES: Record<string, { path: string }> = {
  augiA20Il: { path: '/' },
  hxLZfYJsa: { path: '/projects' },
  qJ4Vqcweh: { path: '/contact' },
  ek3jk_5za: { path: '/thank-you' },
  AkY25b8zJ: { path: '/404' },
  J9I54g36o: { path: '/projects/:slug' },
  NG0xugzUy: { path: '/legal/:lfDOM356e' },
}

const getRoute = (id: string) => ROUTES[id]

export default function FramerRoutes({ children }: { children: ReactNode }) {
  const { pathname } = useLocation()
  const api = useMemo(
    () => ({ getRoute, currentRouteId: 'augiA20Il', currentPathVariables: undefined, preserveQueryParams: false }),
    [],
  )
  // pathname is only read so the provider re-renders consumers on navigation
  void pathname
  return <RouterAPIProvider api={api}>{children}</RouterAPIProvider>
}

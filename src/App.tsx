import { Route, Routes } from 'react-router-dom'
import CursorDot from "./components/layout/CursorDot"
import KeffiniAssistant from "./components/chat/KeffiniAssistant"
import SmoothScroll from "./utils/SmoothScroll"
import RouterGlue from "./utils/RouterGlue"
import PageTransition from "./utils/PageTransition"
import FramerRoutes from "./utils/FramerRoutes"
import Home from './pages/Home'
import Projects from './pages/Projects'
import ProjectDetail from "./pages/ProjectDetail"
import Contact from './pages/Contact'
import ThankYou from './pages/ThankYou'
import Privacy from './pages/Privacy'
import LegalPage from './pages/LegalPage'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <FramerRoutes>
    <RouterGlue />
    <SmoothScroll />
    <PageTransition />
    <CursorDot />
    <KeffiniAssistant />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:slug" element={<ProjectDetail />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/thank-you" element={<ThankYou />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/terms" element={<LegalPage slug="terms-and-conditions" />} />
      <Route path="/legal/:slug" element={<LegalPage />} />
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </FramerRoutes>
  )
}

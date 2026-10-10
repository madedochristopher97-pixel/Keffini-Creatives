import { Route, Routes } from 'react-router-dom'
import CursorDot from "./components/layout/CursorDot"
import SmoothScroll from "./utils/SmoothScroll"
import RouterGlue from "./utils/RouterGlue"
import PageTransition from "./utils/PageTransition"
import Home from './pages/Home'
import Projects from './pages/Projects'
import ProjectDetail from "./pages/ProjectDetail"
import Contact from './pages/Contact'
import ThankYou from './pages/ThankYou'
import Privacy from './pages/Privacy'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <>
    <RouterGlue />
    <SmoothScroll />
    <PageTransition />
    <CursorDot />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:slug" element={<ProjectDetail />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/thank-you" element={<ThankYou />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  )
}

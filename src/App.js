import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';


import './styles/globals.css';
import { useCustomCursor } from './hooks/useCustomCursor';

import Navbar   from './components/Navbar';
import Footer   from './components/Footer';

import HomePage    from './pages/HomePage';
import WorkPage    from './pages/WorkPage';
import AboutPage   from './pages/AboutPage';
import NewsPage    from './pages/NewsPage';
import ContactPage from './pages/ContactPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function ResponsiveCursor() {
  const cursorRef = useCustomCursor();

  useEffect(() => {
    const el = cursorRef.current;
    if (!el) return;
    const mq = window.matchMedia('(min-width: 768px)');
    const update = (e) => { el.style.display = e.matches ? 'block' : 'none'; };
    update(mq);
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, [cursorRef]);

  return <div ref={cursorRef} className="custom-cursor" aria-hidden="true" />;
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="grain-overlay" aria-hidden="true" />
      <ResponsiveCursor />
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/"        element={<HomePage />} />
        <Route path="/work"    element={<WorkPage />} />
        <Route path="/about"   element={<AboutPage />} />
        <Route path="/news"    element={<NewsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*"        element={<HomePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

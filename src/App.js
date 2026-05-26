import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import './styles/globals.css';
import './styles/work.css';
import './styles/about.css';
import './styles/news.css';
import './styles/footer.css';
import './styles/home.css';
import './styles/theme.css';
import { useCustomCursor } from './hooks/useCustomCursor';
import { ThemeProvider } from './context/ThemeContext';

import Navbar       from './components/Navbar';
import Footer       from './components/Footer';
import ThemeToggle  from './components/ThemeToggle';

import HomePage    from './pages/HomePage';
import WorkPage    from './pages/WorkPage';
import AboutPage   from './pages/AboutPage';
import NewsPage    from './pages/NewsPage';
import ContactPage  from './pages/ContactPage';
import BlogPostPage  from './pages/Blogpostpage';
import ProjectDetailPage from './pages/Projectdetailpage';
import PrivacyPolicyPage from './pages/Privacy';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function PageWrapper({ children }) {
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  return (
    <main className={isHome ? undefined : 'page-offset'}>
      {children}
    </main>
  );
}

function ResponsiveCursor() {
  const cursorRef = useCustomCursor();

  useEffect(() => {
    const el = cursorRef.current;
    if (!el) return;
    //const mq = window.matchMedia('(min-width: 768px)');
    const mq = window.matchMedia('(pointer: fine)');
    const update = (e) => { el.style.display = e.matches ? 'block' : 'none'; };
    update(mq);
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, [cursorRef]);

  return <div ref={cursorRef} className="custom-cursor" aria-hidden="true" />;
}

export default function App() {
  return (
    <ThemeProvider>
    <BrowserRouter>
      <div className="grain-overlay" aria-hidden="true" />
      <ResponsiveCursor />
      <ScrollToTop />
      <Navbar />
      <div className="theme-switch-fixed">
        <ThemeToggle />
      </div>
      <PageWrapper>
        <Routes>
          <Route path="/"        element={<HomePage />} />
          <Route path="/work"    element={<WorkPage />} />
          <Route path="/about"   element={<AboutPage />} />
          <Route path="/news"    element={<NewsPage />} />
          <Route path="/contact"    element={<ContactPage />} />
          <Route path="/privacy"    element={<PrivacyPolicyPage />} />
          <Route path="/news/:slug" element={<BlogPostPage />} />
          <Route path="/work/:slug"  element={<ProjectDetailPage />} />
          <Route path="*"           element={<HomePage />} />
        </Routes>
      </PageWrapper>
      <Footer />
    </BrowserRouter>
    </ThemeProvider>
  );
}
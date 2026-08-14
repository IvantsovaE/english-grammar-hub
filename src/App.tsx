import { HashRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import TopicPage from './pages/TopicPage';
import ProgressPage from './pages/ProgressPage';
import './App.css'

export default function App() {
  return (
    <ThemeProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="catalog" element={<CatalogPage />} />
            <Route path="topic/:id" element={<TopicPage />} />
            <Route path="progress" element={<ProgressPage />} />
          </Route>
        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
}

import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import TopicPage from './pages/TopicPage';
import ProgressPage from './pages/ProgressPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ListeningPage from './pages/ListeningPage';
import ReadingPage from './pages/ReadingPage';
import WritingPage from './pages/WritingPage';
import './App.css'

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" replace/>;
}

export default function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="catalog" element={<CatalogPage />} />
              <Route path="topic/:id" element={<TopicPage />} />
              <Route path="listening" element={<ListeningPage />} />
              <Route path="reading" element={<ReadingPage />} />
              <Route path="writing" element={<WritingPage />} />
              <Route path="progress" element={<PrivateRoute><ProgressPage /></PrivateRoute>} />
              <Route path="login" element={<LoginPage />} />
              <Route path="register" element={<RegisterPage />} />
            </Route>
          </Routes>
        </HashRouter>
      </ThemeProvider>
    </AuthProvider>
  );
}
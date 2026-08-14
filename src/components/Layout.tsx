import { Outlet, NavLink } from 'react-router-dom';
import { useTheme } from '../context/useTheme';

export default function Layout() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="app-layout">
      <header className="main-header">
        <div className="logo">
          <NavLink to="/">📚 Grammar Hub</NavLink>
        </div>
        <nav className="main-nav">
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
            Главная
          </NavLink>
          <NavLink to="/catalog" className={({ isActive }) => (isActive ? 'active' : '')}>
            Каталог
          </NavLink>
          <NavLink to="/progress" className={({ isActive }) => (isActive ? 'active' : '')}>
            Мой прогресс
          </NavLink>
          <button className="theme-toggle" onClick={toggleTheme} title="Сменить тему">
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </nav>
      </header>

      <main className="main-content">
        <Outlet />
      </main>

      <footer className="main-footer">
        <p>English Grammar Hub © 2026</p>
      </footer>
    </div>
  );
}
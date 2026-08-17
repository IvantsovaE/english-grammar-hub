import { Outlet, NavLink, Link } from 'react-router-dom';
import { useTheme } from '../context/useTheme';
import { useAuth } from '../context/AuthContext';

export default function Layout() {
  const { theme, toggleTheme } = useTheme();
  const { user, logout } = useAuth();

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
          <NavLink to="/listening" className={({ isActive }) => (isActive ? 'active' : '')}>
            Listening
          </NavLink>
          <NavLink to="/reading" className={({ isActive }) => (isActive ? 'active' : '')}>
            Reading
          </NavLink>
          <NavLink to="/writing" className={({ isActive }) => (isActive ? 'active' : '')}>
            Writing
          </NavLink>
          {user && (
            <NavLink to="/progress" className={({ isActive }) => (isActive ? 'active' : '')}>
              Мой прогресс
            </NavLink>
          )}
          <button className="theme-toggle" onClick={toggleTheme} title="Сменить тему">
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
          {user ? (
            <div className="user-menu">
              <span>{user.name}</span>
              <button className="btn-logout" onClick={logout}>
                Выйти
              </button>
            </div>
          ) : (
            <Link to="/login" className="btn-login">
              Войти
            </Link>
          )}
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
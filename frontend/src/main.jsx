import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primeicons/primeicons.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { CookiesProvider } from 'react-cookie';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_CLIENT_ID}>
      <CookiesProvider defaultSetOptions={{ path: '/' }}>
      <App />
      </CookiesProvider>
    </GoogleOAuthProvider>
  </StrictMode>,
)

const btn = document.getElementById('theme-toggle');
btn.onclick = () => {
  document.body.classList.toggle('dark-mode');
  // optional: store in localStorage
  const isDark = document.body.classList.contains('dark-mode');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
};
// To auto-apply on initial load:
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
}


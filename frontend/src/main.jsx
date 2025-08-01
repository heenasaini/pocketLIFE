import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primeicons/primeicons.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { CookiesProvider } from 'react-cookie';
import { ThemeProvider } from './ThemeContext'; 


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_CLIENT_ID}>
      <CookiesProvider defaultSetOptions={{ path: '/' }}>
       <ThemeProvider>
      <App />
      </ThemeProvider>
      </CookiesProvider>
    </GoogleOAuthProvider>
  </StrictMode>,
)



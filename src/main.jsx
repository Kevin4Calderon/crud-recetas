import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RecetasProvider } from './context/RecetasContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RecetasProvider>
    <App />
    </RecetasProvider>
  </StrictMode>,
);
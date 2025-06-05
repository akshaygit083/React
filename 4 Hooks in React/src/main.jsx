import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { FocusInput } from './App.jsx'

createRoot(document.getElementById("root")).render(<><App /> <FocusInput/></>);

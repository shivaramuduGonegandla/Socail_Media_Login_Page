import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import UserProfile from './components/UserProfile.jsx'

createRoot(document.getElementById('root')).render(
  <UserProfile />
)

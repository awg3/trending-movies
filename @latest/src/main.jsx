import { createRoot } from 'react-dom/client'
import './index.css'
import 'tailwindcss'
import App from './App.jsx'
import { client } from './lib/appwrite.js'

createRoot(document.getElementById('root')).render(<App />)

// Ping the Appwrite backend to verify setup
client.ping();

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Layout from './Layout.jsx'
import Introduction from './Introduction.jsx'

import { HashRouter, Routes, Route } from 'react-router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<App />} />
        <Route path="introduction" element={<Introduction />} />
        </Route>
      </Routes>
    </HashRouter>
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from "react-router";
import { Layout } from './Paginas/Layout.tsx';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
      <Routes>
        {/* <Route element={<App />}> */}
          <Route path="/" element={<App />} />
          <Route path="/layout" element={<Layout />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

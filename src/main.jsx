import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import BascetProvider from './context/BascetContext.jsx'
import LikeProvider from './context/LikeContext.jsx'
import ProductProvider from './context/ProductContext.jsx'
import AuthProvider from './context/AuthContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <ProductProvider>
        <LikeProvider>
          <BascetProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </BascetProvider>
        </LikeProvider>
      </ProductProvider>
    </AuthProvider>
  </React.StrictMode>,
)

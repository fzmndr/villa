import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./styles/index.css"; 
// Pastikan folder "styles" benar-benar ada di dalam "src". 
// Jika file index.css ada di luar folder styles, ubah menjadi import "./index.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>  <-- Coba matikan ini jika layar masih putih
    <App />
  // </React.StrictMode>,
)
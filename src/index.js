import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Posicao from './container/Posicao';
import Historico from './container/Historico';
import Estado from './container/Estado';
import Equipamentos from './container/Equipamentos';
import Mapa from './container/Mapa';




const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
   <Routes>
      <Route path="/" element={<App />} />
        <Route path="/posicao" element={<Posicao />} />
        <Route path="/historico" element={<Historico />} />
        <Route path="/estado" element={<Estado />} />
        <Route path="/equipamentos" element={<Equipamentos />} />
        <Route path="/mapa" element={<Mapa />} />
      

    </Routes>
  </BrowserRouter>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from "react";
import './styles/styles.css'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ConsultaClientes from './components/ConsultaClientes';
import RegistroClientes from './components/RegistroClientes';
import ConsultaProveedores from './components/ConsultaProveedores';
import RegistroProveedores from './components/RegistroProveedores';
import ConsultaVentasCliente from './components/ConsultaVentasPorCliente';
import ConsultaVentasProducto from './components/ConsultaVentasPorProducto';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/consultar-clientes" element={<ConsultaClientes />} />
        <Route path="/registrar-clientes" element={<RegistroClientes />} />
        <Route path="/consultar-proveedores" element={<ConsultaProveedores />} />
        <Route path="/registrar-proveedores" element={<RegistroProveedores />} />
        <Route path="/consultar-ventas-cliente" element={<ConsultaVentasCliente />} />
        <Route path="/consultar-ventas-producto" element={<ConsultaVentasProducto />} />
      </Routes>
    </Router>
  );
}

export default App;

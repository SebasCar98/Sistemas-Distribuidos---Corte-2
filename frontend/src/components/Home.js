import React from "react";
import { Link } from "react-router-dom";
import './Home.css';

export default function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Bienvenidos a la Tienda Virtual</h1>
      <div className="links">
        <Link to="/consultar-clientes" className="btn">Consultar Clientes</Link>
        <Link to="/registrar-clientes" className="btn">Registrar Clientes</Link>
        <Link to="/consultar-proveedores" className="btn">Consultar Proveedores</Link>
        <Link to="/registrar-proveedores" className="btn">Registrar Proveedores</Link>
        <Link to="/consultar-ventas-cliente" className="btn">Consultar ventas por cliente</Link>
        <Link to="/consultar-ventas-producto" className="btn">Consultar ventas por producto</Link>
      </div>
    </div>
  );
}

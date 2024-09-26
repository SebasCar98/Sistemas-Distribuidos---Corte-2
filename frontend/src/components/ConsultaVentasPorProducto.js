import React, { useState } from "react";
import './ConsultaVentasPorProducto.css';

export default function ConsultaVentasProducto() {
  const [codigo, setCodigo] = useState("");
  const [resultados, setResultados] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const consultar = async () => {
    setLoading(true);
    setError("");
    try {
      const params = new URLSearchParams({ codigo: codigo || "null" }).toString();
      const response = await fetch(`/TiendaVirtualSB/consultarVentasConProducto?${params}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        setResultados(data);
      } else {
        throw new Error("Hubo un problema al consultar las ventas.");
      }
    } catch (error) {
      setError("Error en la solicitud. Inténtalo nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="consulta-ventas-producto-container">
      <h1>Consulta de Ventas por Producto</h1>
      <div className="form-group">
        <input
          type="text"
          id="txtCodigo"
          value={codigo}
          onChange={(e) => setCodigo(e.target.value)}
          placeholder="Ingrese el código del producto"
          className="input-field"
        />
        <button className="btn" onClick={consultar} disabled={loading}>
          {loading ? "Consultando..." : "Consultar"}
        </button>
      </div>

      {error && <div className="error-message">{error}</div>}

      {resultados.length > 0 && (
        <table className="result-table">
          <thead>
            <tr>
              <th>Código</th>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Fecha</th>
            </tr>
          </thead>
          <tbody>
            {resultados.map((venta, index) => (
              <tr key={index}>
                <td>{venta.codigo}</td>
                <td>{venta.producto}</td>
                <td>{venta.cantidad}</td>
                <td>{venta.fecha}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

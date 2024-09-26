import React, { useState } from "react";
import './ConsultaProveedores.css';

export default function ConsultaProveedores() {
  const [nit, setNit] = useState("");
  const [resultados, setResultados] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const consultar = async () => {
    setLoading(true);
    setError("");
    try {
      const params = new URLSearchParams({ nit: nit || "null" }).toString();
      const response = await fetch(`/TiendaVirtualSB/consultarProveedores?${params}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        setResultados(data);
      } else {
        throw new Error("Hubo un problema al consultar los proveedores.");
      }
    } catch (error) {
      setError("Error en la solicitud. Inténtalo nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="consulta-proveedores-container">
      <h1>Consulta de Proveedores</h1>
      <div className="form-group">
        <input
          type="text"
          id="txtNIT"
          value={nit}
          onChange={(e) => setNit(e.target.value)}
          placeholder="Ingrese el NIT"
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
              <th>NIT</th>
              <th>Nombre</th>
              <th>Ciudad</th>
              <th>Dirección</th>
              <th>Teléfono</th>
            </tr>
          </thead>
          <tbody>
            {resultados.map((proveedor, index) => (
              <tr key={index}>
                <td>{proveedor.nit}</td>
                <td>{proveedor.nombre}</td>
                <td>{proveedor.ciudad}</td>
                <td>{proveedor.direccion}</td>
                <td>{proveedor.telefono}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

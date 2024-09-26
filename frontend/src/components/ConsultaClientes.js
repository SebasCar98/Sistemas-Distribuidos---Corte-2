import React, { useState } from "react";
import './ConsultaClientes.css';

export default function ConsultaClientes() {
  const [nit, setNit] = useState(""); // Almacenar el valor del NIT
  const [resultados, setResultados] = useState([]); // Almacenar los resultados de la consulta
  const [error, setError] = useState(""); // Manejo de errores
  const [loading, setLoading] = useState(false); // Indicador de carga

  const consultar = async () => {
    if (!nit) {
      setError("Por favor ingrese un NIT para realizar la consulta.");
      return;
    }

    setLoading(true);
    setError("");
    try {
      const params = new URLSearchParams({ nit: nit || "null" }).toString();
      const response = await fetch(`/TiendaVirtualSB/consultarClientes?${params}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        setResultados(data);
      } else {
        throw new Error("Hubo un problema al consultar los clientes.");
      }
    } catch (error) {
      setError("Error en la solicitud. Inténtalo nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="consulta-clientes-container">
      <div className="form-header">
        <h1>Consulta de Clientes</h1>
        <p>Consulta los clientes ingresando su NIT en el campo correspondiente.</p>
      </div>
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
              <th>Dirección</th>
              <th>Email</th>
              <th>Teléfono</th>
            </tr>
          </thead>
          <tbody>
            {resultados.map((cliente, index) => (
              <tr key={index}>
                <td>{cliente.nit}</td>
                <td>{cliente.nombre}</td>
                <td>{cliente.direccion}</td>
                <td>{cliente.email}</td>
                <td>{cliente.telefono}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

import React, { useState } from "react";
import './RegistroClientes.css'; // Importa los estilos de RegistrarClientes

const RegistroClientes = () => {
  const [formData, setFormData] = useState({
    nit: "",
    direccion: "",
    email: "",
    nombre: "",
    telefono: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const validarFormulario = () => {
    const { nit, direccion, email, nombre, telefono } = formData;
    if (!nit || !direccion || !email || !nombre || !telefono) {
      return "Todos los campos son obligatorios.";
    }
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      return "El email no es válido.";
    }
    return null;
  };

  const enviarDatos = async () => {
    const errorMsg = validarFormulario();
    if (errorMsg) {
      setError(errorMsg);
      return;
    }

    setLoading(true);
    setError("");
    setSuccess(false);
    try {
      const response = await fetch("/TiendaVirtualSB/registrarCliente", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({
          nit: "",
          direccion: "",
          email: "",
          nombre: "",
          telefono: "",
        });
      } else {
        throw new Error("Hubo un problema al registrar el cliente.");
      }
    } catch (error) {
      setError("Error en la solicitud. Inténtalo nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <h1>Registro de Clientes</h1>
      <div className="form-group">
        <label>NIT</label>
        <input type="text" name="nit" value={formData.nit} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Dirección</label>
        <input type="text" name="direccion" value={formData.direccion} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Nombre</label>
        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Teléfono</label>
        <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} />
      </div>
      {error && <div className="error">{error}</div>}
      {success && <div className="success">Cliente registrado con éxito.</div>}
      <button className="submit-btn" onClick={enviarDatos} disabled={loading}>
        {loading ? "Enviando..." : "Registrar Cliente"}
      </button>
    </div>
  );
};

export default RegistroClientes;

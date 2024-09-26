import React, { useState } from "react";
import './RegistroProveedores.css'; // Importa los estilos de RegistrarProveedores

const RegistroProveedores = () => {
  const [formData, setFormData] = useState({
    nit: "",
    ciudad: "",
    direccion: "",
    nombre: "",
    telefono: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const enviarDatos = async () => {
    if (!formData.nit || !formData.nombre || !formData.direccion || !formData.telefono) {
      setError("Todos los campos son obligatorios.");
      return;
    }

    try {
      const response = await fetch("/TiendaVirtualSB/registrarProveedor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ nit: "", ciudad: "", direccion: "", nombre: "", telefono: "" });
      } else {
        throw new Error("Hubo un problema al registrar el proveedor.");
      }
    } catch (error) {
      setError("Error en la solicitud.");
    }
  };

  return (
    <div className="form-container">
      <h1>Registro de Proveedores</h1>
      <form>
        <label>NIT</label>
        <input type="text" name="nit" value={formData.nit} onChange={handleChange} />
        <label>Ciudad</label>
        <input type="text" name="ciudad" value={formData.ciudad} onChange={handleChange} />
        <label>Dirección</label>
        <input type="text" name="direccion" value={formData.direccion} onChange={handleChange} />
        <label>Nombre</label>
        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
        <label>Teléfono</label>
        <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} />
        {error && <div className="error">{error}</div>}
        {success && <div className="success">Proveedor registrado con éxito.</div>}
        <button type="button" onClick={enviarDatos}>Registrar Proveedor</button>
      </form>
    </div>
  );
};

export default RegistroProveedores;

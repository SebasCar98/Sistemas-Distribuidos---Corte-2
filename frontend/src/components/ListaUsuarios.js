import React, { useEffect, useState } from "react";
import './ListaUsuarios.css';

const ListaUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const response = await fetch("http://localhost:8080/TiendaVirtualApp/listarPersonas");
        const data = await response.json();
        setUsuarios(data);
      } catch (error) {
        console.error("Error al cargar los usuarios:", error);
      }
    };

    fetchUsuarios();
  }, []);

  return (
    <div className="lista-usuarios">
      <h1>Usuarios Registrados</h1>
      <table>
        <thead>
          <tr>
            <th>Cédula</th>
            <th>Dirección</th>
            <th>Correo Electrónico</th>
            <th>Nombre</th>
            <th>Teléfono</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario, index) => (
            <tr key={index}>
              <td>{usuario.cedula_cli}</td>
              <td>{usuario.direccion_cli}</td>
              <td>{usuario.email_cli}</td>
              <td>{usuario.nombre_cli}</td>
              <td>{usuario.telefono_cli}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListaUsuarios;

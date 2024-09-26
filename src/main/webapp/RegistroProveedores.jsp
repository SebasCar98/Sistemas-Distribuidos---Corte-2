<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Registro de Proveedores</title>
	<style>
		body {
			font-family: Arial, sans-serif;
			color: #fff;
			margin: 0;
			padding: 0;
			background: linear-gradient(to bottom right, #1a237e, #cccccc);
		}
		h1 {
			color: #fff;
			text-align: center;
			margin-top: 50px;
		}

		table {
			margin: 0 auto;
			border-collapse: collapse;
			width: 80%;
		}

		table th, table td {
			border: 1px solid #ccc;
			padding: 8px;
			text-align: left;
		}

		table th {
			background-color: #ff6600;
			color: #fff;
		}

		input[type="text"] {
			padding: 8px;
			font-size: 16px;
			border-radius: 5px;
			border: 1px solid #ccc;
		}

		button {
			padding: 8px 20px;
			font-size: 16px;
			background-color: #ff6600;
			color: #fff;
			border: none;
			border-radius: 5px;
			cursor: pointer;
		}

		button:hover {
			background-color: #cc5500;
		}

		#dvResult {
			margin-top: 20px;
		}
	</style>
<script>
	function validateFields() {
		if (document.getElementById("txtNIT").value.trim().length == 0) {
			alert("El NIT no puede ser vacío.");
			return false;
		} else if (document.getElementById("txtNombre").value.trim().length == 0) {
			alert("El nombre no puede ser vacío.");
			return false;
		} else if (document.getElementById("txtDireccion").value.trim().length == 0) {
			alert("La dirección no puede ser vacío.");
			return false;
		} else if (document.getElementById("txtTelefono").value.trim().length == 0) {
			alert("El telefono no puede ser vacío.");
			return false;
		} else {
			return true;
		}
	}

	function sendData() {
		if (!validateFields()) {
			return;
		} else {
			var nit = document.getElementById("txtNIT").value.trim();
			var ciudad = document.getElementById("txtCiudad").value.trim();
			var direccion = document.getElementById("txtDireccion").value.trim();
			var nombre = document.getElementById("txtNombre").value.trim();
			var telefono = document.getElementById("txtTelefono").value.trim();

			var http = new XMLHttpRequest();
			var url = '/TiendaVirtualSB/registrarProveedor';
			var params = "nit_prov=" + nit + "&" + "ciudad_prov=" + ciudad + "&" + "Direccion_prov=" + direccion + "&" + 
			             "nombre_prov=" + nombre + "&" + "telefono_prov=" + telefono;
			http.open('POST', url, true);

			//Send the proper header information along with the request
			http.setRequestHeader('Content-type',
					'application/x-www-form-urlencoded');

			http.onreadystatechange = function() {//Call a function when the state changes.
				if (http.readyState == 4 && http.status == 200) {
					alert(http.responseText);
				}
			}
			http.send(params);
		}
	}
</script>
</head>
<body>
	<h1>Registro de Proveedores</h1>
	<table>
		<tr>
			<td><label for="txtNIT">NIT:</label></td>
			<td><input type="text" id="txtNIT" name="NIT"></td>
		</tr>
        <tr>
			<td><label for="txtCiudad">Ciudad:</label></td>
			<td><input type="text" id="txtCiudad" name="ciudad"></td>
		</tr>
		<tr>
			<td><label for="txtDireccion">Dirección:</label></td>
			<td><input type="text" id="txtDireccion" name="direccion"></td>
		</tr>
		<tr>
			<td><label for="txtNombre">Nombre</label></td>
			<td><input type="text" id="txtNombre" name="nombre"></td>
		</tr>
		<tr>
			<td><label for="txtTelefono">Telefono</label></td>
			<td><input type="text" id="txtTelefono" name="telefono"></td>
		</tr>
		<tr>
			<td><button onclick="sendData()">Enviar Datos</button></td>
			<td><input type="reset" name="borrar" id="borrar" value="Restablecer"/></td>
		</tr>
	</table>
</body>
</html>
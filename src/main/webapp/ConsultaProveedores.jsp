<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Consulta de Proveedores</title>
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
	function consultar() {
		var nit = document.getElementById("txtNIT").value.trim();
		if (nit.trim() == "") {
			nit = "null";
		}
		var http = new XMLHttpRequest();
		var url = '/TiendaVirtualSB/consultarProveedores';
		var params = "nit=" + nit;
		http.open('POST', url, true);
		//Send the proper header information along with the request
		http.setRequestHeader('Content-type',
				'application/x-www-form-urlencoded');
		http.onreadystatechange = function() {//Call a function when the state changes.
			if (http.readyState == 4 && http.status == 200) {
				alert(http.responseText);
				CreateTableFromJSON(http.responseText);
			}
		}
		http.send(params);
	}
	
	function CreateTableFromJSON(json_result) {
		
		const json_arr = JSON.parse(json_result);
		
		// EXTRACT VALUE FOR HTML HEADER. 	
		var col = [];
		for (var i = 0; i < json_arr.length; i++) {
			for ( var key in json_arr[i]) {
				if (col.indexOf(key) === -1) {
					col.push(key);
				}
			}
		}

		// CREATE DYNAMIC TABLE.
		var table = document.createElement("table");
		table.setAttribute("border", "1");

		// CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

		var tr = table.insertRow(-1); // TABLE ROW.
		

		for (var i = 0; i < col.length; i++) {
			var th = document.createElement("th"); // TABLE HEADER.
			th.innerHTML = col[i];
			tr.appendChild(th);
		}

		// ADD JSON DATA TO THE TABLE AS ROWS.
		for (var i = 0; i < json_arr.length; i++) {

			tr = table.insertRow(-1);

			for (var j = 0; j < col.length; j++) {
				var tabCell = tr.insertCell(-1);
				tabCell.innerHTML = json_arr[i][col[j]];
			}
		}

		// FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
		var divContainer = document.getElementById("dvResult");
		divContainer.innerHTML = "";
		divContainer.appendChild(table);
	}
</script>
</head>
<body>
	<h1>Consulta de Proveedores</h1>
	<table>
		<tr>
			<td><label for="txtNIT">NIT:</label></td>
			<td><input type="text" id="txtNIT" name="NIT"></td>
			<td><button onclick="consultar()">Consultar</button></td>
		</tr>
	</table>
	<div id="dvResult"></div>
</body>
</html>
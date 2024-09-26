package com.DAO.TiendaVirtualSB;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

import javax.swing.JOptionPane;

import com.DTO.TiendaVirtualSB.Ventas;
import com.DTO.TiendaVirtualSB.VentasVO;
import com.DTO.TiendaVirtualSB.VentascliVO;


public class VentasDAO {
	
	
	public void insertVentas(Ventas ven) {
		Conexion conex = new Conexion();
		try {
			Statement estatuto = conex.getConnection().createStatement();
			estatuto.executeUpdate("INSERT INTO ventas(codigo_producto, cantidad, NIT_cliente) VALUES ('" + ven.getCodigo_producto() + "', " + ven.getCantidad()
					+ ", '" + ven.getNIT_cliente() +"')");
			estatuto.close();
			

		} catch (SQLException e) {
			System.out.println(e.getMessage());
		}
	}



	public ArrayList <String> consultarConsolidado(String tipo) {
		ArrayList<String> registros = new ArrayList<String>();
		Conexion conex = new Conexion();

		String sql = "";
		if (tipo.trim().equals("producto")) {
			sql = "SELECT codigo_venta AS Item/*, SUM(cantidad) AS Unidades*/ FROM ventas GROUP BY codigo_venta ORDER BY codigo_venta;";
		} else if (tipo.trim().equals("cliente")){
			sql = "SELECT cedula_cliente AS Item/*, SUM(cantidad) AS Unidades*/ FROM ventas GROUP BY cedula_cliente ORDER BY cedula_cliente;";
		}

		try {
			Statement consulta = conex.getConnection().createStatement();
			ResultSet res = consulta.executeQuery(sql);

			while (res.next()) {
				registros.add(res.getString("Item")/*+";"+res.getInt("unidades")*/);
			}
			res.close();
			consulta.close();
		} catch (Exception e) {
			System.out.println(e);
			JOptionPane.showMessageDialog(null, "no se pudo consultar el Proveedor\n" + e);
		}
		return registros;
	}

	public ArrayList<VentasVO> consultarVentasConProducto(String nit) {
		ArrayList<VentasVO> ventas = new ArrayList<VentasVO>();
		Conexion conex = new Conexion();
		String sql = "SELECT v.codigo_venta, v.cedula_cliente, v.cedula_usuario, v.ivaventa, v.total_venta, v.valor_venta, " +
				"p.codigo_producto, p.nombre_producto, p.precio_producto " +
				"FROM ventas v " +
				"JOIN detalle_ventas dv ON v.codigo_venta = dv.codigo_venta " +
				"JOIN productos p ON dv.codigo_producto = p.codigo_producto";

		try {
			Statement consulta = conex.getConnection().createStatement();
			ResultSet res = consulta.executeQuery(sql);
			while (res.next()) {
				VentasVO venta = new VentasVO(
						res.getString("codigo_venta"),
						res.getString("cedula_cliente"),
						res.getString("cedula_usuario"),
						res.getString("ivaventa"),
						res.getString("total_venta"),
						res.getString("valor_venta"),
						res.getString("codigo_producto"),
						res.getString("nombre_producto"),
						res.getString("precio_producto")
				);
				ventas.add(venta);
			}
			res.close();
			consulta.close();
			conex.desconectar();
		} catch (SQLException e) {
			System.out.println(e.getMessage());
		}
		return ventas;
	}

	public ArrayList<VentascliVO> consultarVentasPorCliente(String cedulaCliente) {
		ArrayList<VentascliVO> ventas = new ArrayList<VentascliVO>();
		Conexion conex = new Conexion();
		String sql = "SELECT v.codigo_venta, v.cedula_cliente, v.cedula_usuario, v.ivaventa, v.total_venta, v.valor_venta, c.nombre_cli " +
				"FROM ventas v " +
				"JOIN clientes c ON v.cedula_cliente = c.cedula_cli " +
				"WHERE v.cedula_cliente = '" + cedulaCliente + "'";
		try {
			Statement consulta = conex.getConnection().createStatement();
			ResultSet res = consulta.executeQuery(sql);
			while (res.next()) {
				VentascliVO venta = new VentascliVO(
						res.getString("codigo_venta"),
						res.getString("cedula_cliente"),
						res.getString("cedula_usuario"),
						res.getString("ivaventa"),
						res.getString("total_venta"),
						res.getString("valor_venta"),
						res.getString("nombre_cli")
				);
				ventas.add(venta);
			}
			res.close();
			consulta.close();
			conex.desconectar();
		} catch (SQLException e) {
			System.out.println(e.getMessage());
		}
		return ventas;
	}
}

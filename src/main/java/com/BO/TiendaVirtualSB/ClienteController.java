package com.BO.TiendaVirtualSB;

import java.util.ArrayList;

import com.DTO.TiendaVirtualSB.VentasVO;
import com.DTO.TiendaVirtualSB.VentascliVO;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.DAO.TiendaVirtualSB.ClienteDAO;
import com.DAO.TiendaVirtualSB.ProveedorDAO;
import com.DAO.TiendaVirtualSB.VentasDAO;
import com.DTO.TiendaVirtualSB.ClienteVO;
import com.DTO.TiendaVirtualSB.ProveedorVO;

@RestController
public class ClienteController {	
	@RequestMapping("/registrarCliente")
	public void registrarCliente(ClienteVO cli) 
	 {
		ClienteDAO Dao=new ClienteDAO(); 
	    Dao.registrarCliente(cli);	    
	 }	 
	/**
	 * permite consultar el Cliente asociado al documento enviado como parámetro
	 * o todos los clientes si no hay parámetro 
	 * @param
	 * @return
	 */	
	@RequestMapping("/consultarClientes")
	public ArrayList<ClienteVO> consultarClientes(String nit) {
		ClienteDAO Dao=new ClienteDAO(); 
	    return 	Dao.consultarClientes(nit);		
	}

	//?NIT=112233&nombre=Gato&direccion=Barranquilla&telefono=314456987&email=gato@hotmail.com&sitioweb=www.elgato.com
	@RequestMapping("/registrarProveedor")
	public String registrarProveedor(ProveedorVO p) {		
		ProveedorDAO dao = new ProveedorDAO();
		dao.insertProveedor(p);
		return "Proveedor Registrado";		
	}
	
	@RequestMapping("/consultarProveedores")
	public ArrayList<ProveedorVO> consultarProveedores(String nit) {		
		ProveedorDAO dao = new ProveedorDAO();
		return dao.consultarProveedores(nit);		
	}

	@RequestMapping("/consultarProveedores1")
	public ArrayList<ProveedorVO> consultarProveedores1(String nit) {
		ProveedorDAO dao = new ProveedorDAO();
		return dao.consultarProveedores(nit);
	}

	@RequestMapping("/consultarVentasPorCliente")
	public ArrayList<VentascliVO> consultarVentasPorCliente(String nit) {
		VentasDAO Dao=new VentasDAO();
		return 	Dao.consultarVentasPorCliente(nit);
	}

	@RequestMapping("/consultarVentasConProducto")
	public ArrayList<VentasVO> consultarVentasConProducto(String nit) {
		VentasDAO Dao=new VentasDAO();
		return 	Dao.consultarVentasConProducto(nit);
	}

	@GetMapping("/consultarVentas/{tipo}")
	public ArrayList<String> consultarVentas(@PathVariable String tipo) {
		VentasDAO dao = new VentasDAO();
		return dao.consultarConsolidado(tipo);		
	}
}
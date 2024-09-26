package com.DTO.TiendaVirtualSB;

public class VentasVO {
    private String codigoVenta;
    private String cedulaCliente;
    private String cedulaUsuario;
    private String ivaventa;
    private String totalVenta;
    private String valorVenta;
    private String codigo_producto;

    private String nombre_producto;

    private String precio_producto;

    public VentasVO(String codigoVenta, String cedulaCliente, String cedulaUsuario, String ivaventa, String totalVenta, String valorVenta , String codigo_producto, String nombre_producto, String precio_producto) {
        this.codigoVenta = codigoVenta;
        this.cedulaCliente = cedulaCliente;
        this.cedulaUsuario = cedulaUsuario;
        this.ivaventa = ivaventa;
        this.totalVenta = totalVenta;
        this.valorVenta = valorVenta;
        this.codigo_producto = codigo_producto;
        this.nombre_producto = nombre_producto;
        this.precio_producto = precio_producto;
    }

    public String getCodigoVenta() {
        return codigoVenta;
    }

    public void setCodigoVenta(String codigoVenta) {
        this.codigoVenta = codigoVenta;
    }

    public String getCedulaCliente() {
        return cedulaCliente;
    }

    public void setCedulaCliente(String cedulaCliente) {
        this.cedulaCliente = cedulaCliente;
    }

    public String getCedulaUsuario() {
        return cedulaUsuario;
    }

    public void setCedulaUsuario(String cedulaUsuario) {
        this.cedulaUsuario = cedulaUsuario;
    }

    public String getIvaventa() {
        return ivaventa;
    }

    public void setIvaventa(String ivaventa) {
        this.ivaventa = ivaventa;
    }

    public String getTotalVenta() {
        return totalVenta;
    }

    public void setTotalVenta(String totalVenta) {
        this.totalVenta = totalVenta;
    }

    public String getValorVenta() {
        return valorVenta;
    }

    public void setValorVenta(String valorVenta) {
        this.valorVenta = valorVenta;
    }



    public String getCodigo_producto() {
        return codigo_producto;
    }

    public void setCodigo_producto(String codigo_producto) {
        this.codigo_producto = codigo_producto;
    }

    public String getNombre_producto() {
        return nombre_producto;
    }

    public void setNombre_producto(String nombre_producto) {
        this.nombre_producto = nombre_producto;
    }

    public String getPrecio_producto() {
        return precio_producto;
    }

    public void setPrecio_producto(String precio_producto) {
        this.precio_producto = precio_producto;
    }
}


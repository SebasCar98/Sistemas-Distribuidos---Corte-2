package com.DTO.TiendaVirtualSB;

public class VentascliVO {
    private String codigoVenta;
    private String cedulaCliente;
    private String cedulaUsuario;
    private String ivaventa;
    private String totalVenta;
    private String valorVenta;
    private String nombreCliente;

    public VentascliVO(String codigoVenta, String cedulaCliente, String cedulaUsuario, String ivaventa, String totalVenta, String valorVenta, String nombreCliente) {
        this.codigoVenta = codigoVenta;
        this.cedulaCliente = cedulaCliente;
        this.cedulaUsuario = cedulaUsuario;
        this.ivaventa = ivaventa;
        this.totalVenta = totalVenta;
        this.valorVenta = valorVenta;
        this.nombreCliente = nombreCliente;
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

    public String getNombreCliente() {
        return nombreCliente;
    }

    public void setNombreCliente(String nombreCliente) {
        this.nombreCliente = nombreCliente;
    }


}


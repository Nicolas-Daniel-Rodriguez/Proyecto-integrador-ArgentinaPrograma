
package com.ProjectAP.NDR.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter @Setter
@Table(name = "educacion")
public class Educacion {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false, updatable = false, unique = true)
    private Long id;
    private String titulo;
    private String lugarEstudio;
    private String fechaInicio;
    private String fechaFin;
    private String certificado;

    public Educacion() {
    }

    public Educacion(Long id, String titulo, String lugarEstudio, String fechaInicio, String fechaFin, String certificado) {
        this.id = id;
        this.titulo = titulo;
        this.lugarEstudio = lugarEstudio;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.certificado = certificado;
    }

    @Override
    public String toString(){
        return "Educacion {" +
                "id=" + id +
                ", titulo='" + titulo + '\'' +
                ", lugarEstudio=" + lugarEstudio + '\'' +
                ", fechaInicio=" + fechaInicio + '\'' +
                ", fechaFin=" + fechaFin + '\'' +
                ", certificado=" + certificado + '\'' +
                '}';
    }
    
}


package com.ProjectAP.NDR.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter @Setter
public class Educacion {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
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

    
    
}

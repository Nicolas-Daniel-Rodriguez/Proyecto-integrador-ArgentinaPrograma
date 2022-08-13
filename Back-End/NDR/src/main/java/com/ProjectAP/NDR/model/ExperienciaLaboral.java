
package com.ProjectAP.NDR.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter @Setter
public class ExperienciaLaboral {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false, updatable = false, unique = true)
    private Long id;
    private String titulo;
    private String fechaInicio;
    private String fechaFin;
    private String descripcion;
    private String imgExp;

    public ExperienciaLaboral() {
    }

    public ExperienciaLaboral(Long id, String titulo, String fechaInicio, String fechaFin, String descripcion, String imgExp) {
        this.id = id;
        this.titulo = titulo;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.descripcion = descripcion;
        this.imgExp = imgExp;
    }
    
    
}

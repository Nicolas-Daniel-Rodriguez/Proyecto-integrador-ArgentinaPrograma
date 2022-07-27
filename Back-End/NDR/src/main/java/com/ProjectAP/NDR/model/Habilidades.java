
package com.ProjectAP.NDR.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter @Setter
public class Habilidades {
    
    @Id
    @GeneratedValue (strategy = GenerationType.AUTO)
    private Long id;
    private String titulo;
    private String descripcion;
    private String imgHab;
    private String porcentaje;

    public Habilidades() {
    }

    public Habilidades(Long id, String titulo, String descripcion, String imgHab, String porcentaje) {
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.imgHab = imgHab;
        this.porcentaje = porcentaje;
    }
      
}

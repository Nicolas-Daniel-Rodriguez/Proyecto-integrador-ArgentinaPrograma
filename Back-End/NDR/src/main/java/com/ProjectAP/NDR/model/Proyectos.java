
package com.ProjectAP.NDR.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter @Setter
public class Proyectos {
    
    @Id
    @GeneratedValue (strategy = GenerationType.AUTO)
    private Long id;
    private String titulo;
    private String descripcion;
    private String logoProy;
    private String link;
    private String num;
    private String imgDemo;

    public Proyectos() {
    }

    public Proyectos(Long id, String titulo, String descripcion, String logoProy, String link, String num, String imgDemo) {
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.logoProy = logoProy;
        this.link = link;
        this.num = num;
        this.imgDemo = imgDemo;
    }
    
    
    
}

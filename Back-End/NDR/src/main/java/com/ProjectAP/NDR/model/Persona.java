
package com.ProjectAP.NDR.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@Entity
public class Persona {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String nombre;
    private String apellido;
    private String pais;
    private String telefono;
    private String email;
    private String instagram;
    private String github;
    private String linkedin;
    private String imgPortada;
    private String imgPerfil;
    private String ocupacionCorta;
    private String ocupacion;
    private String acercaDe;
    
    public Persona() {
    }

    public Persona(Long id, String nombre, String apellido, String pais, String telefono, String email, String instagram, String github, String linkedin, String imgPortada, String imgPerfil, String ocupacionCorta, String ocupacion, String acercaDe) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
        this.telefono = telefono;
        this.email = email;
        this.instagram = instagram;
        this.github = github;
        this.linkedin = linkedin;
        this.imgPortada = imgPortada;
        this.imgPerfil = imgPerfil;
        this.ocupacionCorta = ocupacionCorta;
        this.ocupacion = ocupacion;
        this.acercaDe = acercaDe;
    }

    
    
}

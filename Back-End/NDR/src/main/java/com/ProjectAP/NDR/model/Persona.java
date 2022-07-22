
package com.ProjectAP.NDR.model;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class Persona {
    
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
    
    public Persona() {
    }

    public Persona(Long id, String nombre, String apellido, String pais, String telefono, String email, String instagram, String github, String linkedin, String imgPortada, String imgPerfil, String ocupacionCorta, String ocupacion) {
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
    }
    
}

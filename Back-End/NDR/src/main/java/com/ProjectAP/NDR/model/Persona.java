
package com.ProjectAP.NDR.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.util.List;
import lombok.Getter;
import lombok.Setter;
import javax.persistence.*;

@Getter @Setter
@Entity
public class Persona {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false, updatable = false, unique = true)
    private Long id;
    private String nombre;
    private String apellido;
    private String pais;
    private String telefono;
    private String email;
    private String instagram;
    private String github;
    private String linkedin;
    private String ocupacionCorta;
    private String ocupacion;
    
    @JsonIgnoreProperties("persona")
    @OneToMany(cascade = CascadeType.ALL, targetEntity = Educacion.class)
    @JoinColumn(name = "ed_fk", referencedColumnName = "id")
    private List<Educacion> educacionList;

    @JsonIgnoreProperties("persona")
    @OneToMany(cascade = CascadeType.ALL, targetEntity = ExperienciaLaboral.class)
    @JoinColumn(name = "ex_fk", referencedColumnName = "id")
    private List<ExperienciaLaboral> experienciaList;

    @JsonIgnoreProperties("persona")
    @OneToMany(cascade = CascadeType.ALL, targetEntity = Habilidades.class)
    @JoinColumn(name = "sk_fk", referencedColumnName = "id")
    private List<Habilidades> habilidadesList;

    @JsonIgnoreProperties("persona")
    @OneToMany(cascade = CascadeType.ALL, targetEntity = Proyectos.class)
    @JoinColumn(name = "pr_fk", referencedColumnName = "id")
    private List<Proyectos> proyectosList;
    
    @JsonIgnoreProperties("persona")
    @OneToMany(cascade = CascadeType.ALL, targetEntity = AcercaDe.class)
    @JoinColumn(name = "Ac_fk", referencedColumnName = "id")
    private List<AcercaDe> acercaDeList;
    
    @JsonIgnoreProperties("persona")
    @OneToMany(cascade = CascadeType.ALL, targetEntity = ImgPerfil.class)
    @JoinColumn(name = "ImgPe_fk", referencedColumnName = "id")
    private List<ImgPerfil> imgPerfilList;
    
    @JsonIgnoreProperties("persona")
    @OneToMany(cascade = CascadeType.ALL, targetEntity = ImgPortada.class)
    @JoinColumn(name = "ImgPo_fk", referencedColumnName = "id")
    private List<ImgPortada> imgPortadaList;
    
    public Persona() {
    }

    public Persona(Long id, String nombre, String apellido, String pais, String telefono, String email, String instagram, String github, String linkedin, String ocupacionCorta, String ocupacion) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
        this.telefono = telefono;
        this.email = email;
        this.instagram = instagram;
        this.github = github;
        this.linkedin = linkedin;
        this.ocupacionCorta = ocupacionCorta;
        this.ocupacion = ocupacion;
    }

    @Override
    public String toString() {
        return "Persona{" +
                "id=" + id +
                ", nombre='" + nombre + '\'' +
                ", apellido='" + apellido + '\'' +
                ", pais='" + pais + '\'' +
                ", telefono='" + telefono + '\'' +
                ", email='" + email + '\'' +
                ", instagram='" + instagram + '\'' +
                ", github='" + github + '\'' +
                ", linkedin='" + linkedin + '\'' +
                ", ocupacionCorta='" + ocupacionCorta + '\'' +
                ", ocupacion='" + ocupacion + '\'' +
                '}';
    }
    
}

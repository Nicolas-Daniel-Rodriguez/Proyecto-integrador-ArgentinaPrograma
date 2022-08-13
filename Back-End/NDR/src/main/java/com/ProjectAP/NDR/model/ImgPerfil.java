
package com.ProjectAP.NDR.model;

import javax.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@Entity
public class ImgPerfil {
    
    @Id
    @GeneratedValue (strategy = GenerationType.AUTO)
    private Long id;
    private String imgPerfil;

    public ImgPerfil() {
    }

    public ImgPerfil(Long id, String imgPerfil) {
        this.id = id;
        this.imgPerfil = imgPerfil;
    }
    
    
}


package com.ProjectAP.NDR.model;

import javax.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@Entity
public class ImgPortada {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String imgPortada;

    public ImgPortada() {
    }

    public ImgPortada(Long id, String imgPortada) {
        this.id = id;
        this.imgPortada = imgPortada;
    }
    
    
}

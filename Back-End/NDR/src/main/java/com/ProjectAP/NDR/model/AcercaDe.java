
package com.ProjectAP.NDR.model;

import lombok.Getter;
import lombok.Setter;
import javax.persistence.*;

@Entity
@Getter @Setter
public class AcercaDe {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false, updatable = false, unique = true)
    private Long id;
    private String acercaDe;

    public AcercaDe() {
    }

    public AcercaDe(Long id, String acercaDe) {
        this.id = id;
        this.acercaDe = acercaDe;
    }
    
    
}



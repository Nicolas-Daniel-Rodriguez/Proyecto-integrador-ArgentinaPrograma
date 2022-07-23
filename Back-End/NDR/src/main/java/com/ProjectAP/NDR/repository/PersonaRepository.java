
package com.ProjectAP.NDR.repository;

import com.ProjectAP.NDR.model.Persona;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository 
public interface PersonaRepository extends JpaRepository <Persona, Long>{
    
}

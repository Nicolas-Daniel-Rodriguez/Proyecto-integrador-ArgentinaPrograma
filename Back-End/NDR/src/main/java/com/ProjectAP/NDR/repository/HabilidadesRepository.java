
package com.ProjectAP.NDR.repository;

import com.ProjectAP.NDR.model.Habilidades;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HabilidadesRepository extends JpaRepository <Habilidades, Long>{
    
}

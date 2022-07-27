
package com.ProjectAP.NDR.repository;

import com.ProjectAP.NDR.model.ExperienciaLaboral;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ExperienciaRepository extends JpaRepository <ExperienciaLaboral, Long>{
    
}

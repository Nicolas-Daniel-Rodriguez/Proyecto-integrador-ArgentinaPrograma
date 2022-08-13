
package com.ProjectAP.NDR.repository;

import com.ProjectAP.NDR.model.AcercaDe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AcercaDeRepository extends JpaRepository <AcercaDe, Long>{
    
}


package com.ProjectAP.NDR.repository;

import com.ProjectAP.NDR.model.ImgPortada;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ImgPortadaRepository extends JpaRepository <ImgPortada, Long>{
    
}

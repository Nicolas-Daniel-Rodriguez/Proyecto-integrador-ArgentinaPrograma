
package com.ProjectAP.NDR.repository;

import com.ProjectAP.NDR.model.ImgPerfil;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ImgPerfilRepository extends JpaRepository <ImgPerfil, Long>{
    
}

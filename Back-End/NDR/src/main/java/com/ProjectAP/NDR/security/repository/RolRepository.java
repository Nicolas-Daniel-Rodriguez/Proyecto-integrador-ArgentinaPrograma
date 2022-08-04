
package com.ProjectAP.NDR.security.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import com.ProjectAP.NDR.security.entity.Rol;
import com.ProjectAP.NDR.security.enums.RolNombre;

@Repository
public interface RolRepository extends JpaRepository<Rol, Integer> {

    Optional<Rol> findByRolNombre(RolNombre rolNombre);
}



package com.ProjectAP.NDR.security.util;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import com.ProjectAP.NDR.security.entity.Rol;
import com.ProjectAP.NDR.security.enums.RolNombre;
import com.ProjectAP.NDR.security.service.RolService;

// Comentar o borrar clase despues del primer run de la aplicación
/*@Component
public class CreateRoles implements CommandLineRunner {

    @Autowired
    RolService rolService;

    @Override
    public void run(String... args) throws Exception {
        Rol rolAdmin = new Rol(RolNombre.ROLE_ADMIN);
        Rol rolUser = new Rol(RolNombre.ROLE_USER);
        rolService.save(rolAdmin);
        rolService.save(rolUser);
    }
} */
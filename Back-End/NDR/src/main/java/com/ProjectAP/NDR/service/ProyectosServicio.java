
package com.ProjectAP.NDR.service;

import com.ProjectAP.NDR.model.Proyectos;
import com.ProjectAP.NDR.repository.ProyectosRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProyectosServicio implements IProyectosServicio{
    
    @Autowired
    ProyectosRepository proyRepo;
    
    @Override
    public List<Proyectos> verProyectos() {
        return proyRepo.findAll();
    }

    @Override
    public void crearProyecto(Proyectos proy) {
        proyRepo.save(proy);
    }

    @Override
    public void eliminarProyecto(Long id) {
        proyRepo.deleteById(id);
    }

    @Override
    public Proyectos buscarProyecto(Long id) {
        return proyRepo.findById(id).orElse(null);
    }
    
}

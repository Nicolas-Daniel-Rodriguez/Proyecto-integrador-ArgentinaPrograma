
package com.ProjectAP.NDR.service;

import com.ProjectAP.NDR.model.Habilidades;
import com.ProjectAP.NDR.repository.HabilidadesRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class HabilidadesServicio implements IHabilidadesServicio{
    
    @Autowired
    HabilidadesRepository habRepo;
    
    @Override
    public List<Habilidades> verHabilidades() {
        return habRepo.findAll();
    }

    @Override
    public void crearHabilidad(Habilidades hab) {
        habRepo.save(hab);
    }

    @Override
    public void eliminarHabilidad(Long id) {
        habRepo.deleteById(id);
    }

    @Override
    public Habilidades buscarHabilidad(Long id) {
        return habRepo.findById(id).orElse(null);
    }
    
}

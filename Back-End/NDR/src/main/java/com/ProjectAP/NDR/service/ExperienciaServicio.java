
package com.ProjectAP.NDR.service;

import com.ProjectAP.NDR.model.ExperienciaLaboral;
import com.ProjectAP.NDR.repository.ExperienciaRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ExperienciaServicio implements IExperienciaServicio{
    
    @Autowired
    ExperienciaRepository expRepo;
    
    @Override
    public List<ExperienciaLaboral> verExperiencia() {
        return expRepo.findAll();
    }

    @Override
    public void crearExperiencia(ExperienciaLaboral exp) {
        expRepo.save(exp);
    }

    @Override
    public void eliminarExperiencia(Long id) {
        expRepo.deleteById(id);
    }

    @Override
    public ExperienciaLaboral buscarExperiencia(Long id) {
        return expRepo.findById(id).orElse(null);
    }
    
}

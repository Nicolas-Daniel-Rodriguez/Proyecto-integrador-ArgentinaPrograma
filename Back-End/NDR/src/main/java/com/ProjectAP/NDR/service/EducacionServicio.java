
package com.ProjectAP.NDR.service;

import com.ProjectAP.NDR.model.Educacion;
import com.ProjectAP.NDR.repository.EducacionRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EducacionServicio implements IEducacionServicio{
    
    @Autowired
    EducacionRepository EduRepo;
    
    @Override
    public List<Educacion> verEducacion() {
        return EduRepo.findAll();
    }

    @Override
    public void crearEducacion(Educacion edu) {
        EduRepo.save(edu);
    }

    @Override
    public void eliminarEducacion(Long id) {
        EduRepo.deleteById(id);
    }

    @Override
    public Educacion buscarEducacion(Long id) {
        return EduRepo.findById(id).orElse(null);
    }
    
}

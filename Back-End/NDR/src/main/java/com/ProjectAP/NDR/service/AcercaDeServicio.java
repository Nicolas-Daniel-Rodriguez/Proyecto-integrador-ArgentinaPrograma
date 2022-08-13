
package com.ProjectAP.NDR.service;

import com.ProjectAP.NDR.model.AcercaDe;
import com.ProjectAP.NDR.repository.AcercaDeRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AcercaDeServicio implements IAcercaDeServicio{
    
    
    @Autowired
    AcercaDeRepository aceRepo;
    
    @Override
    public List<AcercaDe> verAcercaDe() {
        return aceRepo.findAll();
    }

    @Override
    public void crearAcercaDe(AcercaDe ace) {
        aceRepo.save(ace);
    }

    @Override
    public void eliminarAcercaDe(Long id) {
        aceRepo.deleteById(id);
    }

    @Override
    public AcercaDe buscarAcercaDe(Long id) {
        return aceRepo.findById(id).orElse(null);
    }
    
}


package com.ProjectAP.NDR.service;

import com.ProjectAP.NDR.model.ImgPortada;
import com.ProjectAP.NDR.repository.ImgPortadaRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ImgPortadaServicio implements IImgPortadaServicio{
    
    @Autowired
    ImgPortadaRepository imgPorRepo;
    
    @Override
    public List<ImgPortada> verImgPortada() {
        return imgPorRepo.findAll();
    }

    @Override
    public void crearImgPortada(ImgPortada imgPor) {
        imgPorRepo.save(imgPor);
    }

    @Override
    public void eliminarImgPortada(Long id) {
        imgPorRepo.deleteById(id);
    }

    @Override
    public ImgPortada buscarImgPortada(Long id) {
        return imgPorRepo.findById(id).orElse(null);
    }
    
}

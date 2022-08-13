
package com.ProjectAP.NDR.service;

import com.ProjectAP.NDR.model.ImgPerfil;
import com.ProjectAP.NDR.repository.ImgPerfilRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ImgPerfilServicio implements IImgPerfilServicio{
    
    
    @Autowired
    ImgPerfilRepository imgPerRepo;
    
    @Override
    public List<ImgPerfil> verImgPerfil() {
        return imgPerRepo.findAll();
    }

    @Override
    public void crearImgPerfil(ImgPerfil imgPer) {
        imgPerRepo.save(imgPer);
    }

    @Override
    public void eliminarImgPerfil(Long id) {
        imgPerRepo.deleteById(id);
    }

    @Override
    public ImgPerfil buscarImgPerfil(Long id) {
        return imgPerRepo.findById(id).orElse(null);
    }
    
}

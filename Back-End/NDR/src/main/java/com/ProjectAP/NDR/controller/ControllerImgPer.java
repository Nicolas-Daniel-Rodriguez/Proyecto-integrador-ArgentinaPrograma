
package com.ProjectAP.NDR.controller;

import com.ProjectAP.NDR.model.ImgPerfil;
import com.ProjectAP.NDR.service.IImgPerfilServicio;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*")
@RestController
public class ControllerImgPer {
    
    
    @Autowired
    private IImgPerfilServicio imgPerServ;
    
    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping ("/nueva/imgperfil")
    public void agregarImgPerfil (@RequestBody ImgPerfil imgPer){
        imgPerServ.crearImgPerfil(imgPer);
    }
     
    @GetMapping ("/ver/imgperfil")
    @ResponseBody
    public List<ImgPerfil> verImgPerfil(){
        return imgPerServ.verImgPerfil();
    }
    
    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping ("/eliminar/imgperfil/{id}")
    public void eliminarImgPerfil (@PathVariable Long id){
        imgPerServ.eliminarImgPerfil(id);
    }
    
    @GetMapping ("/buscar/imgperfil/{id}")
    @ResponseBody
    public ImgPerfil buscarImgPerfil(@PathVariable Long id){
        return imgPerServ.buscarImgPerfil(id);
    }
    
    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping ("/modificar/imgperfil/{id}")
    public ImgPerfil modificarImgPerfil (@PathVariable Long id,
                                    @RequestBody ImgPerfil imgPer){
        
        ImgPerfil imgPerfil = imgPerServ.buscarImgPerfil(id);
        
        imgPerfil.setImgPerfil(imgPer.getImgPerfil());
        
        imgPerServ.crearImgPerfil(imgPerfil);
        return imgPerfil;       
    }
}

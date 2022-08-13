
package com.ProjectAP.NDR.controller;

import com.ProjectAP.NDR.model.ImgPortada;
import com.ProjectAP.NDR.service.IImgPortadaServicio;
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
public class ControllerImgPor {
    
    @Autowired
    private IImgPortadaServicio imgPorServ;
    
    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping ("/nueva/imgportada")
    public void agregarImgPortada (@RequestBody ImgPortada imgPor){
        imgPorServ.crearImgPortada(imgPor);
    }
     
    @GetMapping ("/ver/imgportada")
    @ResponseBody
    public List<ImgPortada> verImgPortada(){
        return imgPorServ.verImgPortada();
    }
    
    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping ("/eliminar/imgportada/{id}")
    public void eliminarImgPortada (@PathVariable Long id){
        imgPorServ.eliminarImgPortada(id);
    }
    
    @GetMapping ("/buscar/imgportada/{id}")
    @ResponseBody
    public ImgPortada buscarImgPortada(@PathVariable Long id){
        return imgPorServ.buscarImgPortada(id);
    }
    
    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping ("/modificar/imgportada/{id}")
    public ImgPortada modificarImgPortada (@PathVariable Long id,
                                    @RequestBody ImgPortada imgPor){
        
        ImgPortada imgPortada = imgPorServ.buscarImgPortada(id);
        
        imgPortada.setImgPortada(imgPor.getImgPortada());
        
        imgPorServ.crearImgPortada(imgPortada);
        return imgPortada;       
    }
}

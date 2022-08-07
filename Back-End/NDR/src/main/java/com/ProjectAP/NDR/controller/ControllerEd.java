
package com.ProjectAP.NDR.controller;

import com.ProjectAP.NDR.model.Educacion;
import com.ProjectAP.NDR.service.IEducacionServicio;
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
public class ControllerEd {
    
    @Autowired
    private IEducacionServicio eduServ;
    
    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping ("/nueva/educacion")
    public void agregarEducacion (@RequestBody Educacion Edu){
        eduServ.crearEducacion(Edu);
    }
     
    @GetMapping ("/ver/educacion")
    @ResponseBody
    public List<Educacion> verEducacion(){
        return eduServ.verEducacion();
    }
    
    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping ("/eliminar/educacion/{id}")
    public void eliminarEducacion (@PathVariable Long id){
        eduServ.eliminarEducacion(id);
    }
    
    @GetMapping ("/buscar/educacion/{id}")
    @ResponseBody
    public Educacion buscarEducacion(@PathVariable Long id){
        return eduServ.buscarEducacion(id);
    }
    
    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping ("/modificar/educacion/{id}")
    public Educacion modificarEducacion (@PathVariable Long id,
                                    @RequestBody Educacion educ){
        
        Educacion educacion = eduServ.buscarEducacion(id);
        
        educacion.setTitulo(educ.getTitulo());
        educacion.setLugarEstudio(educ.getLugarEstudio());
        educacion.setFechaInicio(educ.getFechaInicio());
        educacion.setFechaFin(educ.getFechaFin());
        educacion.setCertificado(educ.getCertificado());
        
        eduServ.crearEducacion(educacion);
        return educacion;       
    }
}

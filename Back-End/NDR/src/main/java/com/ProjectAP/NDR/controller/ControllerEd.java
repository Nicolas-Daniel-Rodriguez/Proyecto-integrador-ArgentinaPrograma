
package com.ProjectAP.NDR.controller;

import com.ProjectAP.NDR.model.Educacion;
import com.ProjectAP.NDR.service.IEducacionServicio;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerEd {
    
    @Autowired
    private IEducacionServicio eduServ;
    
    @PostMapping ("/nueva/educacion")
    public void agregarPersona (@RequestBody Educacion Edu){
        eduServ.crearEducacion(Edu);
    }
     
    @GetMapping ("/ver/educacion")
    @ResponseBody
    public List<Educacion> verEducacion(){
        return eduServ.verEducacion();
    }
    
    @DeleteMapping ("/eliminar/educacion/{id}")
    public void eliminarEducacion (@PathVariable Long id){
        eduServ.eliminarEducacion(id);
    }
    
    @GetMapping ("/buscar/educacion/{id}")
    @ResponseBody
    public Educacion buscarEducacion(@PathVariable Long id){
        return eduServ.buscarEducacion(id);
    }
    
    @PutMapping ("/modificar/educacion/{id}")
    public Educacion modificarEducacion (@PathVariable Long id,
                                    @RequestParam("titulo") String nuevoTitulo,
                                    @RequestParam("lugarEstudio") String nuevoLugarEstudio,
                                    @RequestParam("fechaInicio") String nuevaFechaInicio,
                                    @RequestParam("fechaFin") String nuevaFechaFin,
                                    @RequestParam("certificado") String nuevoCertificado){
        
        Educacion educacion = eduServ.buscarEducacion(id);
        
        educacion.setTitulo(nuevoTitulo);
        educacion.setLugarEstudio(nuevoLugarEstudio);
        educacion.setFechaInicio(nuevaFechaInicio);
        educacion.setFechaFin(nuevaFechaFin);
        educacion.setCertificado(nuevoCertificado);
        
        eduServ.crearEducacion(educacion);
        return educacion;       
        
    }
}


package com.ProjectAP.NDR.controller;

import com.ProjectAP.NDR.model.ExperienciaLaboral;
import com.ProjectAP.NDR.service.IExperienciaServicio;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerExp {
    
    @Autowired
    private IExperienciaServicio expServ;
    
    @PostMapping ("/nueva/experiencia")
    public void agregarExperiencia (@RequestBody ExperienciaLaboral Exp) {
        expServ.crearExperiencia(Exp);
    }
    
    @GetMapping ("/ver/experiencia")
    @ResponseBody
    public List<ExperienciaLaboral> verExperiencia(){
        return expServ.verExperiencia();
    }
    
    @DeleteMapping ("/eliminar/experiencia/{id}")
    public void eliminarExperiencia (@PathVariable Long id){
        expServ.eliminarExperiencia(id);
    }
    
    @GetMapping ("/buscar/experiencia/{id}")
    @ResponseBody
    public ExperienciaLaboral buscarExperiencia(@PathVariable Long id){
        return expServ.buscarExperiencia(id);
    }
    
}


package com.ProjectAP.NDR.controller;

import com.ProjectAP.NDR.model.ExperienciaLaboral;
import com.ProjectAP.NDR.service.IExperienciaServicio;
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
public class ControllerExp {
    
    @Autowired
    private IExperienciaServicio expServ;
    
    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping ("/nueva/experiencia")
    public void agregarExperiencia (@RequestBody ExperienciaLaboral Exp) {
        expServ.crearExperiencia(Exp);
    }
    
    @GetMapping ("/ver/experiencia")
    @ResponseBody
    public List<ExperienciaLaboral> verExperiencia(){
        return expServ.verExperiencia();
    }
    
    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping ("/eliminar/experiencia/{id}")
    public void eliminarExperiencia (@PathVariable Long id){
        expServ.eliminarExperiencia(id);
    }
    
    @GetMapping ("/buscar/experiencia/{id}")
    @ResponseBody
    public ExperienciaLaboral buscarExperiencia(@PathVariable Long id){
        return expServ.buscarExperiencia(id);
    }
    
    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping ("/modificar/experiencia/{id}")
    public ExperienciaLaboral modificarExperiencia (@PathVariable Long id,
                                    @RequestBody ExperienciaLaboral exp){
        
        ExperienciaLaboral experiencia = expServ.buscarExperiencia(id);
        
        experiencia.setTitulo(exp.getTitulo());
        experiencia.setFechaInicio(exp.getFechaInicio());
        experiencia.setFechaFin(exp.getFechaFin());
        experiencia.setDescripcion(exp.getDescripcion());
        experiencia.setImgExp(exp.getImgExp());
        
        expServ.crearExperiencia(experiencia);
        return experiencia;       
    }
}

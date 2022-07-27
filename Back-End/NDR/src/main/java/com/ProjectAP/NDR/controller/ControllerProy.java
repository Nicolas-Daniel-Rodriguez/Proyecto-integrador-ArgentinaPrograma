
package com.ProjectAP.NDR.controller;

import com.ProjectAP.NDR.model.Proyectos;
import com.ProjectAP.NDR.service.IProyectosServicio;
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
public class ControllerProy {
    
    @Autowired
    private IProyectosServicio proyServ;
    
    @PostMapping ("/nueva/proyecto")
    public void agregarProyecto (@RequestBody Proyectos proy){
        proyServ.crearProyecto(proy);
    }
     
    @GetMapping ("/ver/proyectos")
    @ResponseBody
    public List<Proyectos> verProyectos(){
        return proyServ.verProyectos();
    }
    
    @DeleteMapping ("/eliminar/proyecto/{id}")
    public void eliminarProyecto (@PathVariable Long id){
        proyServ.eliminarProyecto(id);
    }
    
    @GetMapping ("/buscar/proyecto/{id}")
    @ResponseBody
    public Proyectos buscarProyecto(@PathVariable Long id){
        return proyServ.buscarProyecto(id);
    }
    
}

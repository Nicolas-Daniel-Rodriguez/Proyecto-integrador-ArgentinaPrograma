
package com.ProjectAP.NDR.controller;

import com.ProjectAP.NDR.model.Proyectos;
import com.ProjectAP.NDR.service.IProyectosServicio;
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
public class ControllerProy {
    
    @Autowired
    private IProyectosServicio proyServ;
    
    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping ("/nuevo/proyecto")
    public void agregarProyecto (@RequestBody Proyectos proy){
        proyServ.crearProyecto(proy);
    }
     
    @GetMapping ("/ver/proyectos")
    @ResponseBody
    public List<Proyectos> verProyectos(){
        return proyServ.verProyectos();
    }
    
    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping ("/eliminar/proyecto/{id}")
    public void eliminarProyecto (@PathVariable Long id){
        proyServ.eliminarProyecto(id);
    }
    
    @GetMapping ("/buscar/proyecto/{id}")
    @ResponseBody
    public Proyectos buscarProyecto(@PathVariable Long id){
        return proyServ.buscarProyecto(id);
    }
    
    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping ("/modificar/proyecto/{id}")
    public Proyectos modificarProyecto (@PathVariable Long id,
                                    @RequestBody Proyectos proy){
        
        Proyectos proyecto = proyServ.buscarProyecto(id);
        
        proyecto.setTitulo(proy.getTitulo());
        proyecto.setDescripcion(proy.getDescripcion());
        proyecto.setLogoProy(proy.getLogoProy());
        proyecto.setLink(proy.getLink());
        proyecto.setNum(proy.getNum());
        proyecto.setImgDemo(proy.getImgDemo());
        
        proyServ.crearProyecto(proyecto);
        return proyecto;       
    }
}

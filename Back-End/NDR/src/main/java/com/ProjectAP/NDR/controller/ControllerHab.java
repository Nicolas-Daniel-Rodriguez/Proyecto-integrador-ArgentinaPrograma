
package com.ProjectAP.NDR.controller;

import com.ProjectAP.NDR.model.Habilidades;
import com.ProjectAP.NDR.service.IHabilidadesServicio;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControllerHab {
    
    @Autowired
    private IHabilidadesServicio habServ;
    
    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping ("/nueva/habilidad")
    public void agregarHabilidad (@RequestBody Habilidades hab){
        habServ.crearHabilidad(hab);
    }
     
    @GetMapping ("/ver/habilidades")
    @ResponseBody
    public List<Habilidades> verHabilidades(){
        return habServ.verHabilidades();
    }
    
    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping ("/eliminar/habilidad/{id}")
    public void eliminarHabilidad (@PathVariable Long id){
        habServ.eliminarHabilidad(id);
    }
    
    @GetMapping ("/buscar/habilidad/{id}")
    @ResponseBody
    public Habilidades buscarHabilidad(@PathVariable Long id){
        return habServ.buscarHabilidad(id);
    }
    
    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping ("/modificar/habilidades/{id}")
    public Habilidades modificarHabilidad (@PathVariable Long id,
                                    @RequestBody Habilidades hab){
        
        Habilidades habilidad = habServ.buscarHabilidad(id);
        
        habilidad.setTitulo(hab.getTitulo());
        habilidad.setDescripcion(hab.getDescripcion());
        habilidad.setImgHab(hab.getImgHab());
        habilidad.setPorcentaje(hab.getPorcentaje());
        
        habServ.crearHabilidad(habilidad);
        return habilidad;       
    }
}

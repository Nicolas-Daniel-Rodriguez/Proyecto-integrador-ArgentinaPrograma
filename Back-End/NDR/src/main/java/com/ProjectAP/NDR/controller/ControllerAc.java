
package com.ProjectAP.NDR.controller;

import com.ProjectAP.NDR.model.AcercaDe;
import com.ProjectAP.NDR.service.IAcercaDeServicio;
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
public class ControllerAc {
    
    @Autowired
    private IAcercaDeServicio aceServ;
    
    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping ("/nueva/acercade")
    public void agregarAcercaDe (@RequestBody AcercaDe Ace){
        aceServ.crearAcercaDe(Ace);
    }
     
    @GetMapping ("/ver/acercade")
    @ResponseBody
    public List<AcercaDe> verAcercaDe(){
        return aceServ.verAcercaDe();
    }
    
    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping ("/eliminar/acercade/{id}")
    public void eliminarAcercaDe (@PathVariable Long id){
        aceServ.eliminarAcercaDe(id);
    }
    
    @GetMapping ("/buscar/acercade/{id}")
    @ResponseBody
    public AcercaDe buscarAcercaDe(@PathVariable Long id){
        return aceServ.buscarAcercaDe(id);
    }
    
    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping ("/modificar/acercade/{id}")
    public AcercaDe modificarAcercaDe (@PathVariable Long id,
                                    @RequestBody AcercaDe ace){
        
        AcercaDe acercade = aceServ.buscarAcercaDe(id);
        
        acercade.setAcercaDe(ace.getAcercaDe());
        
        aceServ.crearAcercaDe(acercade);
        return acercade;       
    }
}

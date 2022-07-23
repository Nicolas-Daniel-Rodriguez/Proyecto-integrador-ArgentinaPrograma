
package com.ProjectAP.NDR.controller;


import com.ProjectAP.NDR.model.Persona;
import com.ProjectAP.NDR.service.IPersonaService;
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
public class Controller {
 
    @Autowired
    private IPersonaService persoServ;
    
    @PostMapping ("/nueva/persona")
    public void agregarPersona (@RequestBody Persona pers){
        persoServ.crearPersona(pers);
    }
     
    @GetMapping ("/ver/personas")
    @ResponseBody
    public List<Persona> verPersonas(){
        return persoServ.verPersonas();
    }
    
    @DeleteMapping ("/eliminar/{id}")
    public void eliminarPersona (@PathVariable Long id){
        persoServ.eliminarPersona(id);
    }
    
    
    
}   

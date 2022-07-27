
package com.ProjectAP.NDR.controller;


import com.ProjectAP.NDR.model.Persona;
import com.ProjectAP.NDR.service.IPersonaService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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
    
    @PutMapping ("/modificar/persona/{id}")
    public Persona modificarPersona (@PathVariable Long id,
                                    @RequestBody Persona per){
        
        Persona persona = persoServ.buscarPersona(id);
        
        persona.setNombre(per.getNombre());
        persona.setApellido(per.getApellido());
        persona.setPais(per.getPais());
        persona.setTelefono(per.getTelefono());
        persona.setEmail(per.getEmail());
        persona.setInstagram(per.getInstagram());
        persona.setGithub(per.getGithub());
        persona.setLinkedin(per.getLinkedin());
        persona.setImgPortada(per.getImgPortada());
        persona.setImgPerfil(per.getImgPerfil());
        persona.setOcupacionCorta(per.getOcupacionCorta());
        persona.setOcupacion(per.getOcupacion());
        persona.setAcercaDe(per.getAcercaDe());
        
        persoServ.crearPersona(persona);
        return persona;       
    }
}   

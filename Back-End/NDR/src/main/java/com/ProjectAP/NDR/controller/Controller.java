
package com.ProjectAP.NDR.controller;

import com.ProjectAP.NDR.model.Educacion;
import java.util.ArrayList;
import java.util.List;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {
 
    List<Educacion> listaEducacion = new ArrayList();
    
    @GetMapping ("/hola")
    public String decirHola(@RequestParam String nombre,
                            @RequestParam String apellido){
        return "hola mundo " + nombre + " " + apellido ;
    }
    
    @PostMapping ("/nueva/educacion")
    public void agregarEducacion (@RequestBody Educacion edu){
        listaEducacion.add(edu);
    }
     
    @GetMapping ("/ver/educacion")
    @ResponseBody
    public List<Educacion> verEducacion(){
        return listaEducacion;
    }
    /*revisar*/
    @DeleteMapping ("/eliminar/educacion")
    public void eliminarEducacion (@RequestParam Long id, 
                                   @RequestBody Educacion edu){
        listaEducacion.remove(id);
    }
    /*Agregar metodo put*/
}

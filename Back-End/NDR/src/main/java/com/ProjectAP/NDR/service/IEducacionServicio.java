
package com.ProjectAP.NDR.service;

import com.ProjectAP.NDR.model.Educacion;
import java.util.List;


public interface IEducacionServicio {
    
    public List<Educacion> verEducacion ();
    public void crearEducacion (Educacion Edu);
    public void eliminarEducacion (Long id);
    public Educacion buscarEducacion (Long id);
    
}

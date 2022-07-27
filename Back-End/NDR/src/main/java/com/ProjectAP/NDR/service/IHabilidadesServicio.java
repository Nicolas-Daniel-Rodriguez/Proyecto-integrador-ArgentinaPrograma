
package com.ProjectAP.NDR.service;

import com.ProjectAP.NDR.model.Habilidades;
import java.util.List;


public interface IHabilidadesServicio {
    
    public List<Habilidades> verHabilidades ();
    public void crearHabilidad (Habilidades Hab);
    public void eliminarHabilidad (Long id);
    public Habilidades buscarHabilidad (Long id);
}

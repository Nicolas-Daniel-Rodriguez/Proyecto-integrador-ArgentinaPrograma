
package com.ProjectAP.NDR.service;

import com.ProjectAP.NDR.model.Proyectos;
import java.util.List;


public interface IProyectosServicio {
    
    public List<Proyectos> verProyectos ();
    public void crearProyecto (Proyectos proy);
    public void eliminarProyecto (Long id);
    public Proyectos buscarProyecto (Long id);
}

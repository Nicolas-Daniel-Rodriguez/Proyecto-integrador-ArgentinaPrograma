
package com.ProjectAP.NDR.service;

import com.ProjectAP.NDR.model.ExperienciaLaboral;
import java.util.List;


public interface IExperienciaServicio {
 
    public List<ExperienciaLaboral> verExperiencia ();
    public void crearExperiencia (ExperienciaLaboral Edu);
    public void eliminarExperiencia (Long id);
    public ExperienciaLaboral buscarExperiencia (Long id);
}

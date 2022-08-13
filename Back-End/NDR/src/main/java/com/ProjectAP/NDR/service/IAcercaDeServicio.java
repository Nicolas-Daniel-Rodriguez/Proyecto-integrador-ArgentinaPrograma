
package com.ProjectAP.NDR.service;

import com.ProjectAP.NDR.model.AcercaDe;
import java.util.List;


public interface IAcercaDeServicio {
    
    public List<AcercaDe> verAcercaDe ();
    public void crearAcercaDe (AcercaDe Acer);
    public void eliminarAcercaDe (Long id);
    public AcercaDe buscarAcercaDe (Long id);
}

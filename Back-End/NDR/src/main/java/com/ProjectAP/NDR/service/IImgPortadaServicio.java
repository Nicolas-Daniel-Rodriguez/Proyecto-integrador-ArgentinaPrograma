
package com.ProjectAP.NDR.service;

import com.ProjectAP.NDR.model.ImgPortada;
import java.util.List;


public interface IImgPortadaServicio {
    
     public List<ImgPortada> verImgPortada ();
    public void crearImgPortada (ImgPortada ImgPor);
    public void eliminarImgPortada (Long id);
    public ImgPortada buscarImgPortada (Long id);
}

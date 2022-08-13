
package com.ProjectAP.NDR.service;

import com.ProjectAP.NDR.model.ImgPerfil;
import java.util.List;


public interface IImgPerfilServicio {
    
    public List<ImgPerfil> verImgPerfil ();
    public void crearImgPerfil (ImgPerfil ImgPer);
    public void eliminarImgPerfil (Long id);
    public ImgPerfil buscarImgPerfil (Long id);
}

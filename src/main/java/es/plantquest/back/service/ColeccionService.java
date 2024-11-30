package es.plantquest.back.service;

import es.plantquest.back.domain.Coleccion;
import es.plantquest.back.repository.ColeccionRepository;
import es.plantquest.back.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ColeccionService {
    @Autowired
    private ColeccionRepository coleccionRepository;
    private UsuarioRepository usuarioRepository;

    public ColeccionService(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    public List<Coleccion> all(){return coleccionRepository.findAll();}

    public Coleccion save (Coleccion coleccion){



        if (findColeccionByUserId(coleccion.getUsuario().getID()) != null) {
            return coleccionRepository.save(coleccion);
        }

        return null;
    }

    public void delete (Long id){
        coleccionRepository.deleteById(id);
    }

    public Coleccion findById(Long id){ return coleccionRepository.findById(id).orElse(null); }

    public Coleccion findColeccionByUserId(Long userId){
        if (usuarioRepository.findById(userId) != null){
            return coleccionRepository.findColeccionByUsuarioID(userId);

        }
        return null;

    }


}

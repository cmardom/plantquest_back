package es.plantquest.back.service;

import es.plantquest.back.domain.Coleccion;
import es.plantquest.back.repository.ColeccionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ColeccionService {
    @Autowired
    private ColeccionRepository coleccionRepository;

    public List<Coleccion> all(){return coleccionRepository.findAll();}

    public Coleccion save (Coleccion coleccion){ return coleccionRepository.save(coleccion); }

    public void delete (Long id){
        coleccionRepository.deleteById(id);
    }

    public Coleccion findById(Long id){ return coleccionRepository.findById(id).orElse(null); }


}

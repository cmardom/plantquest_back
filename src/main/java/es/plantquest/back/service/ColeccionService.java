package es.plantquest.back.service;

import es.plantquest.back.domain.Coleccion;
import es.plantquest.back.domain.Planta;
import es.plantquest.back.repository.ColeccionRepository;
import es.plantquest.back.repository.PlantaRepository;
import es.plantquest.back.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class ColeccionService {
    @Autowired
    private ColeccionRepository coleccionRepository;
    private UsuarioRepository usuarioRepository;
    private PlantaRepository plantaRepository; // You need this to find and associate Plantas


    public ColeccionService(UsuarioRepository usuarioRepository, PlantaRepository plantaRepository) {
        this.usuarioRepository = usuarioRepository;
        this.plantaRepository = plantaRepository;
    }


    @Transactional
    public Coleccion addPlantaToColeccion(Long coleccionId, Long plantaId) {
        Optional<Coleccion> coleccionOptional = coleccionRepository.findById(coleccionId);
        Optional<Planta> plantaOptional = plantaRepository.findById(plantaId);

        if (coleccionOptional.isPresent() && plantaOptional.isPresent()) {
            Coleccion coleccion = coleccionOptional.get();
            Planta planta = plantaOptional.get();

            // Add planta to coleccion's plantas list
            coleccion.getPlantas().add(planta);


            // Save the updated coleccion
            return coleccionRepository.save(coleccion);
        }

        return null; // Handle if either coleccion or planta is not found
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

    public Coleccion findById(Long id){ return coleccionRepository.findById(id).get(); }

    public Coleccion[] findColeccionByUserId(Long userId){
        if (usuarioRepository.findById(userId) != null){
            return coleccionRepository.findColeccionByUsuarioID(userId);

        }
        return null;

    }



}

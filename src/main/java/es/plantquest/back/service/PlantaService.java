package es.plantquest.back.service;

import es.plantquest.back.domain.Coleccion;
import es.plantquest.back.domain.Planta;
import es.plantquest.back.repository.ColeccionRepository;
import es.plantquest.back.repository.PlantaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class PlantaService {
    @Autowired
    private PlantaRepository plantaRepository;
    private ColeccionRepository coleccionRepository;

    public PlantaService(ColeccionRepository coleccionRepository) {
        this.coleccionRepository = coleccionRepository;
    }

    public List<Planta> all(){return plantaRepository.findAll();}

    public Planta one(Long id){
        if (plantaRepository.findById(id).isPresent()){
            return plantaRepository.findById(id).get();
        } else {
            return null;
        }
    }

    public Planta save(Planta planta) {
        return plantaRepository.save(planta);
    }

    public void delete(Long id) {
        plantaRepository.findById(id).map(p ->
            {plantaRepository.delete(p); return p;}).orElseThrow(() -> new RuntimeException("Planta no encontrada"));

    }

    public Planta replace (Long id, Planta planta){
        return plantaRepository.findById(id).map(p-> (id.equals(planta.getID())?
                plantaRepository.save(planta) : planta)).orElseThrow(() -> new RuntimeException("Planta no encontrada"));
    }


    public Set<Planta> getPlantasForColeccion(Long coleccionId) {
        Optional<Coleccion> coleccionOpt = coleccionRepository.findById(coleccionId);
        if (coleccionOpt.isPresent()) {
            return coleccionOpt.get().getPlantas();
        }
        return Collections.emptySet();
    }


}

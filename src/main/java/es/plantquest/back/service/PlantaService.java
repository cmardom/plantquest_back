package es.plantquest.back.service;

import es.plantquest.back.domain.Planta;
import es.plantquest.back.repository.PlantaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PlantaService {
    @Autowired
    private PlantaRepository plantaRepository;

    public List<Planta> all(){return plantaRepository.findAll();}

    public Planta one(Long id){
        return plantaRepository.findById(id).get();
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







}

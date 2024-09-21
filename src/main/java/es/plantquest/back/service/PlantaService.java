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

    public List<Planta> all(){
        return plantaRepository.findAll();
    }
    public Planta create(Planta planta) {
        return plantaRepository.save(planta);
    }
    public Planta update (Long id, Planta planta){
        return plantaRepository.findById(id).map(p-> (id.equals(planta.getID())?
                plantaRepository.save(planta) : planta)).orElse(null);
    }
    public void delete(Planta planta) {
        plantaRepository.delete(planta);
    }


    public Planta findById(Long id){
        return plantaRepository.findById(id).get();
    }

    public Planta findByName(String name){
        return plantaRepository.findByNombre(name);
    }


}

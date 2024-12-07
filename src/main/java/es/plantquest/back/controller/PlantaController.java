package es.plantquest.back.controller;


import es.plantquest.back.domain.Planta;
import es.plantquest.back.service.ColeccionService;
import es.plantquest.back.service.PlantaService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Slf4j
@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping("/v1/api/plantas")
public class PlantaController {

    @Autowired
    private PlantaService plantaService;
    private ColeccionService coleccionService;

    @GetMapping({"","/"})
    public List<Planta> getPlantas() {
        log.info("getPlantas");
        return this.plantaService.all();
    }

    @PostMapping({"","/"})
    public Planta nuevaPlanta(@RequestBody Planta planta) {
        return plantaService.save(planta);
    }

    @GetMapping("/{id}")
    public Optional<Planta> one (@PathVariable("id") Long id) {
        log.info("get planta con id> " + id);

        return plantaService.one(id);
    }

    @PutMapping("/{id}")
    public Planta savePlanta(@PathVariable("id") Long id, @RequestBody Planta planta) {
        planta.setID(id);
        return plantaService.save(planta);
    }


    @ResponseBody
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/{id}")
    public void deletePlanta(@PathVariable("id") Long id) {
        plantaService.delete(id);
    }


    @GetMapping("/coleccion/{coleccionId}")
    public List<Planta> getPlantasForColeccion(@PathVariable("coleccionId") Long coleccionId) {
        log.info("Fetching plantas for coleccion with ID: " + coleccionId);

        List<Planta> plantas = plantaService.getPlantasForColeccion(coleccionId);  // Call to the service method

        if (plantas.isEmpty()) {
            log.info("No plantas found for coleccion with ID: " + coleccionId);
        } else {
            log.info("Found " + plantas.size() + " plantas for coleccion with ID: " + coleccionId);
        }

        return plantas;  // Return the list of plantas for the coleccion
    }




}

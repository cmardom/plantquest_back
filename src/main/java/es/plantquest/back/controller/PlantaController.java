package es.plantquest.back.controller;


import es.plantquest.back.domain.Planta;
import es.plantquest.back.domain.Usuario;
import es.plantquest.back.service.PlantaService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping("/v1/api/plantas")
public class PlantaController {

    @Autowired
    private PlantaService plantaService;

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
    public Planta one (@PathVariable("id") Long id, @RequestBody Planta planta) {
        return plantaService.one(id);
    }

    @PutMapping("/{id}")
    public Planta replacePlanta(@PathVariable("id") Long id, @RequestBody Planta planta) {
        return plantaService.replace(id, planta);
    }


    @ResponseBody
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/{id}")
    public void deletePlanta(@PathVariable("id") Long id) {
        plantaService.delete(id);
    }




}

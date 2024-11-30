package es.plantquest.back.controller;


import es.plantquest.back.domain.Coleccion;
import es.plantquest.back.domain.Planta;
import es.plantquest.back.service.ColeccionService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Slf4j
@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping("/v1/api/colecciones")
public class ColeccionController {
    @Autowired
    private ColeccionService coleccionService;

    @GetMapping({"","/"})
    public List<Coleccion> getColecciones() {
        log.info("getColecciones");
        return this.coleccionService.all();
    }

    @PostMapping({"","/"})
    public Coleccion nuevaColeccion(@RequestBody Coleccion coleccion) {
        return coleccionService.save(coleccion);
    }


    @GetMapping("/{id}")
    public Optional<Coleccion> one (@PathVariable("id") Long id) {
        log.info("get coleccion con id> " + id);

        return Optional.ofNullable(coleccionService.findById(id));
    }

    @ResponseBody
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/{id}")
    public void deleteColeccion(@PathVariable("id") Long id) {
        coleccionService.delete(id);
    }


}

package es.plantquest.back.controller;


import es.plantquest.back.domain.Coleccion;
import es.plantquest.back.domain.Planta;
import es.plantquest.back.domain.Usuario;
import es.plantquest.back.service.ColeccionService;
import es.plantquest.back.service.UsuarioService;
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
    private UsuarioService usuarioService;

    public ColeccionController(UsuarioService usuarioService) {
        this.usuarioService = usuarioService;
    }


    @GetMapping({"","/"})
    public List<Coleccion> getColecciones() {
        log.info("getColecciones");
        return this.coleccionService.all();
    }

    @PostMapping({"","/"})
    public Coleccion nuevaColeccion(@RequestBody Coleccion coleccion) {
        Usuario usuario = usuarioService.one(coleccion.getUsuario().getID());

        if (usuario != null) {
            coleccion.setUsuario(usuario); // Set the Usuario to the Coleccion
            return coleccionService.save(coleccion);
        } else {
            throw new RuntimeException("Usuario not found with ID " + coleccion.getUsuario().getID());
        }
    }


    @GetMapping("/{id}")
    public Optional<Coleccion> one (@PathVariable("id") Long id) {
        log.info("get coleccion con id> " + id);

        return Optional.ofNullable(coleccionService.findById(id));
    }



    @GetMapping("/usuario")
    public Optional<Coleccion> getColeccionByUserId(@RequestParam("id") Long id) {
        log.info("get coleccion con user id> " + id);

        if (usuarioService.one(id) != null) {
            return Optional.ofNullable(coleccionService.findColeccionByUserId(id));
        }

        return Optional.empty();
    }


    @ResponseBody
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/{id}")
    public void deleteColeccion(@PathVariable("id") Long id) {
        coleccionService.delete(id);
    }


}

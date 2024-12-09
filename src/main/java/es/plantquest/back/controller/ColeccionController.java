package es.plantquest.back.controller;


import es.plantquest.back.domain.Coleccion;
import es.plantquest.back.domain.Planta;
import es.plantquest.back.domain.Usuario;
import es.plantquest.back.service.ColeccionService;
import es.plantquest.back.service.PlantaService;
import es.plantquest.back.service.UsuarioService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
    @Autowired
    private PlantaService plantaService;

    public ColeccionController(UsuarioService usuarioService) {
        this.usuarioService = usuarioService;
    }


    @GetMapping({"","/"})
    public List<Coleccion> getColecciones() {
        log.info("getColecciones");
        return this.coleccionService.all();
    }


    @GetMapping("/coleccion/{nombre}/{usuarioId}")
    public Coleccion nuevaColeccion(@PathVariable String nombre, @PathVariable Long usuarioId) {
        log.info("entra en el GET con nombre: " + nombre + " y usuarioId: " + usuarioId);

        Usuario usuario = usuarioService.one(usuarioId);
        if (usuario != null) {
            log.info("Usuario encontrado con ID: " + usuarioId);

            Coleccion coleccion = new Coleccion();
            coleccion.setNombre(nombre);
            coleccion.setUsuario(usuario);

            return coleccionService.save(coleccion);
        } else {
            log.info("Usuario no encontrado con ID: " + usuarioId);
            throw new RuntimeException("Usuario not found with ID " + usuarioId);
        }
    }




    @GetMapping("/{id}")
    public Optional<Coleccion> one (@PathVariable("id") Long id) {
        log.info("get coleccion con id> " + id);

        return Optional.ofNullable(coleccionService.findById(id));
    }



    @GetMapping("/usuario")
    public Optional<Coleccion[]> getColeccionByUserId(@RequestParam("id") Long id) {
        log.info("get coleccion con user id> " + id);

        if (usuarioService.one(id) != null) {
            return Optional.ofNullable(coleccionService.findColeccionByUserId(id));
        }

        return Optional.empty();
    }


    @ResponseBody
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @CrossOrigin(origins = "http://localhost:4200")
    @DeleteMapping("/{id}")
    public void deleteColeccion(@PathVariable("id") Long id) {
        coleccionService.delete(id);
    }


    @PutMapping("/{coleccionId}/plantas/{plantaId}")
    public ResponseEntity<?> addPlantaToColeccion(
            @PathVariable("coleccionId") Long coleccionId,
            @PathVariable("plantaId") Long plantaId) {
        log.info("Adding planta " + plantaId + " to coleccion " + coleccionId);

        Coleccion coleccionSeleccionada = coleccionService.findById(coleccionId);
        Planta planta = plantaService.one(plantaId);
        Coleccion updatedColeccion =  new Coleccion();

        if (coleccionSeleccionada.getPlantas().contains(planta) ){
            throw new RuntimeException("Planta already exists in Coleccion");
        } else {
            updatedColeccion = coleccionService.addPlantaToColeccion(coleccionId, plantaId);


        }



        if (updatedColeccion != null) {
            return ResponseEntity.ok(updatedColeccion); // This is returning a ResponseEntity<Coleccion>
        } else {
            // Return a ResponseEntity with a String message
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body("Planta not found.");
        }
    }




}

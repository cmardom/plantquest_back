package es.plantquest.back.controller;

import es.plantquest.back.domain.Usuario;
import es.plantquest.back.service.UsuarioService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping("/v1/api/usuarios")
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    @GetMapping({"","/"})
    public List<Usuario> getUsuarios() {
        log.info("getUsuarios");
        return this.usuarioService.all();
    }

    @PostMapping({"","/"})
    public Usuario nuevoUsuario(@RequestBody Usuario usuario) {
        return usuarioService.save(usuario);
    }

    @PostMapping("/login")
    public Usuario login(@RequestBody Usuario usuario) {
        return usuarioService.login(usuario).getBody();
    }

    @PostMapping("/signin")
    public Usuario signin(@RequestBody Usuario usuario) {
        return usuarioService.signin(usuario);
    }


    @PutMapping("/{id}")
    public Usuario replaceUsuario(@PathVariable("id") Long id, @RequestBody Usuario usuario) {
        return usuarioService.replace(id, usuario);
    }

    @ResponseBody
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/{id}")
    public void deleteUsuario(@PathVariable("id") Long id) {
        usuarioService.delete(id);
    }

}

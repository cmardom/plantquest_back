package es.plantquest.back.service;

import es.plantquest.back.domain.Rol;
import es.plantquest.back.domain.Usuario;
import es.plantquest.back.repository.UsuarioRepository;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    public List<Usuario> all(){return usuarioRepository.findAll();}

    public Usuario one(Long id) {return usuarioRepository.findById(id).get();}

    public Usuario findByEmail(String email) {
        List<Usuario> usuarios = all();
        Usuario usuario = usuarios.stream().filter(user -> user.getEmail().equals(email)).findFirst().orElse(null);

        return usuario;
    }


    public ResponseEntity<Usuario> login(Usuario usuarioLgin) {
        Usuario usuario = findByEmail(usuarioLgin.getEmail());
        if (usuario != null && usuario.getPassword().equals(usuarioLgin.getPassword())) {
            return ResponseEntity.ok(usuario);
        } else {
            throw new ResponseStatusException(HttpStatus.FORBIDDEN);
        }
    }


    public ResponseEntity<Usuario> signin (Usuario usuarioLgin) {
        Usuario usuario = findByEmail(usuarioLgin.getEmail());
       try{
           if (usuario == null) {
               usuarioLgin.setRol(Rol.ROL_USER);

               Usuario nuevousuario = usuarioRepository.save(usuarioLgin);

               return ResponseEntity.ok(nuevousuario);
           }
       }catch (Exception e) {

           throw new ResponseStatusException(HttpStatus.FORBIDDEN);
       }
        return ResponseEntity.badRequest().body(null);
    }


    public Usuario save(Usuario usuario) {return usuarioRepository.save(usuario);}

    public void delete(Long id) {
        usuarioRepository.findById(id).map(usuario ->
            {usuarioRepository.delete(usuario); return usuario;}).orElse(null);}

    public Usuario replace(Long id, Usuario usuario) {
        return usuarioRepository.findById(id).map(u ->
            (id.equals(usuario.getID()) ? usuarioRepository.save(usuario) : null))
            .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));}



    @PostMapping("/logout")
    public ResponseEntity<?> logout(HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        if (session != null) {
            session.invalidate();

        }
        return ResponseEntity.ok("Logout successful");
    }



}

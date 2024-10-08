package es.plantquest.back.service;

import es.plantquest.back.domain.Rol;
import es.plantquest.back.domain.Usuario;
import es.plantquest.back.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    //metodos para las colecciones

    public List<Usuario> all(){return usuarioRepository.findAll();}

    public Usuario one(Long id) {return usuarioRepository.findById(id).get();}

    public Usuario findByEmail(String email) {
        List<Usuario> usuarios = all();
        Usuario usuario = usuarios.stream().filter(user -> user.getEmail().equals(email)).findFirst().orElse(null);

        return usuario;
    }

    public Usuario login (Usuario usuarioLgin) {
        //declara usuario como usuariofindbyemail
        //devolver token
        //redirigir al landing

        System.out.println("usuario que llega en back > " + usuarioLgin);

        Usuario usuario = findByEmail(usuarioLgin.getEmail());

        if (usuario !=  null && usuario.getPassword().equals(usuarioLgin.getPassword())){
            System.out.println("usuario: " + usuario);

            return usuario;
        }
        return null;
    }




    public Usuario signin (Usuario usuarioLgin) {

        Usuario usuario = findByEmail(usuarioLgin.getEmail());
        System.out.println("usuario que se encuentra en singin por email > " + usuario);
        if (usuario == null) {
            System.out.println("usuario que se va a guardar: " + usuarioLgin);
            usuarioLgin.setRol(Rol.ROL_USER);
            usuarioRepository.save(usuarioLgin);

            return usuario;
        } else {
            System.out.println("el usuario existe");
        }

        return null;

    }


    public Usuario save(Usuario usuario) {return usuarioRepository.save(usuario);}

    public void delete(Long id) {
        usuarioRepository.findById(id).map(usuario ->
            {usuarioRepository.delete(usuario); return usuario;}).orElse(null);}

    public Usuario replace(Long id, Usuario usuario) {
        return usuarioRepository.findById(id).map(u ->
            (id.equals(usuario.getID()) ? usuarioRepository.save(usuario) : null))
            .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));}
}

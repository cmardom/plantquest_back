package es.plantquest.back.service;

import es.plantquest.back.domain.Usuario;
import es.plantquest.back.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    //metodos para las colecciones

    public List<Usuario> all(){return usuarioRepository.findAll();}

    public Usuario one(Long id) {return usuarioRepository.findById(id).get();}

    public Usuario save(Usuario usuario) {return usuarioRepository.save(usuario);}

    public void delete(Long id) {
        usuarioRepository.findById(id).map(usuario ->
            {usuarioRepository.delete(usuario); return usuario;}).orElse(null);}

    public Usuario replace(Long id, Usuario usuario) {
        return usuarioRepository.findById(id).map(u ->
            (id.equals(usuario.getID()) ? usuarioRepository.save(usuario) : null))
            .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));}
}

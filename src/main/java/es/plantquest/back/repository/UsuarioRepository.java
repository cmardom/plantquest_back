package es.plantquest.back.repository;

import es.plantquest.back.domain.Usuario;
import org.hibernate.query.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    //metodos para las colecciones del usuario

    public Usuario findByEmail(String email);
}

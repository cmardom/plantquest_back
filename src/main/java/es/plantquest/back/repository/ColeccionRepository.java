package es.plantquest.back.repository;

import es.plantquest.back.domain.Coleccion;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ColeccionRepository extends JpaRepository<Coleccion, Long> {

    public Coleccion[] findColeccionByUsuarioID(Long id);
}

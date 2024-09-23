package es.plantquest.back.repository;

import es.plantquest.back.domain.Planta;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PlantaRepository extends JpaRepository<Planta, Long> {

    /*hacer metodo para buscar por nombre coloquial y cientifico O por cualquier texto en entidad
     */

}

package es.plantquest.back.repository;

import es.plantquest.back.domain.Admin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdminRepository extends JpaRepository<Admin, Long> {
    //métodos para las plantas
    //métodos para las colecciones
}

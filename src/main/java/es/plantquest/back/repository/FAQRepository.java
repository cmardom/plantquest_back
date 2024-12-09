package es.plantquest.back.repository;

import es.plantquest.back.domain.FAQ;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FAQRepository extends JpaRepository<FAQ, Long> {


}

package es.plantquest.back.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.Inheritance;
import jakarta.persistence.InheritanceType;
import jakarta.persistence.Table;
import lombok.*;

@Entity
@Data
@AllArgsConstructor
@EqualsAndHashCode(callSuper=false)
public class Admin extends Usuario{

    //lista de plantas
}

package es.plantquest.back.domain;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name="faq")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class FAQ {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @EqualsAndHashCode.Include
    private Long ID;

    private String pregunta;
    private String respuesta;
}

package es.plantquest.back.domain;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Table(name = "colecciones")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class Coleccion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @EqualsAndHashCode.Include
    private Long ID;

    private String nombre;


    @ManyToOne
    @JsonManagedReference //evita recursion infinita en el json
    @JoinColumn(name = "usuario_id", nullable = false)
    private Usuario usuario;

    @OneToMany
    @JoinColumn(name = "coleccion_id")
    private List<Planta> plantas;

}

package es.plantquest.back.domain;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;
import java.util.Set;

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
    @JoinColumn(name = "usuario_id", nullable = false)
    @JsonBackReference
    @JsonIgnore  // Prevent recursion in serialization
    private Usuario usuario;

    // Managed side of the relationship
    @ManyToMany
    @JoinTable(
            name = "coleccion_planta",
            joinColumns = @JoinColumn(name = "coleccion_id"),
            inverseJoinColumns = @JoinColumn(name = "planta_id")
    )
    @JsonManagedReference
    private Set<Planta> plantas;



    @Override
    public String toString() {
        return "Coleccion{" +
                "id=" + ID +
                ", nombre='" + nombre + '\'' +
                '}';
    }
}

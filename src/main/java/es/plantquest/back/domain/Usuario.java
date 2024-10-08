package es.plantquest.back.domain;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name="usuarios")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @EqualsAndHashCode.Include
    private Long ID;

    private String nombre;
    private String email;
    private String password;

    @Column(columnDefinition = "ENUM('ROL_USER', 'ROL_ADMIN') DEFAULT 'ROL_USER'")
    @Enumerated(EnumType.STRING)
    private Rol rol;




     /*@OneToMany(mappedBy = "question", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    @JsonIgnore
    @ToString.Exclude
    private List<Coleccion> colecciones*/
}

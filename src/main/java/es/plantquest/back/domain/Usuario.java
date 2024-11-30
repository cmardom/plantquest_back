package es.plantquest.back.domain;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Table(name="usuarios")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@JsonIgnoreProperties({"colecciones"})
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


    @OneToMany(mappedBy = "usuario", cascade = CascadeType.ALL)
    @JsonManagedReference
    private List<Coleccion> colecciones;

}
/*@OneToMany(mappedBy = "question", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    @JsonIgnore
    @ToString.Exclude
    private List<Coleccion> colecciones*/

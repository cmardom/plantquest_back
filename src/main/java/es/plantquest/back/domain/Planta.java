package es.plantquest.back.domain;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Table(name="plantas")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class Planta {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @EqualsAndHashCode.Include
    private Long ID;

    private String nombre_cientifico;
    private String nombre_comun;
    private String riego;
    private String iluminacion;
    private String humedad;
    private String temperatura;
    private String localizacion;
    private String toxicidad;
    private String abono;

    @Lob
    @Column (columnDefinition = "LONGTEXT")
    private String info;

    @Lob
    private String imagePath;

    @ManyToMany(mappedBy = "plantas")
    @JsonBackReference
    @JsonIgnore
    private List<Coleccion> colecciones;
}

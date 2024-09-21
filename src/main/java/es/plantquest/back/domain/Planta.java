package es.plantquest.back.domain;

import jakarta.persistence.*;
import lombok.*;

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
    private String localización;
    private String toxicidad;
    private String abono;
    private String caracteristicas;

    @Lob
    private String imagePath;
}

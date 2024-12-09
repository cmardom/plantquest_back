package es.plantquest.back.domain;


import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@Table(name="blog")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class Blog {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @EqualsAndHashCode.Include
    private Long ID;

    private String titulo;


    @Column(name = "tags")
    private String tags;  // "tag1,tag2,tag3"

    @Lob
    @Column (columnDefinition = "LONGTEXT")
    private String texto;

    @Column(name = "date", nullable = true)
    private LocalDate date;

    private String imagePath;



}

package es.plantquest.back.domain;


import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.util.List;

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
//    @Convert(converter = StringArrayConverter.class)
//    private String[] tags;

//    ---convertToDatabaseColumn:
//    Converts the List<String> (tags) into a single String where each tag
//    is separated by commas (e.g., "tag1,tag2,tag3").
//    ---convertToEntityAttribute:
//    Converts the comma-separated String from the database back into a
//    List<String> (e.g., from "tag1,tag2,tag3" to ["tag1", "tag2", "tag3"]).

    @Lob
    @Column (columnDefinition = "LONGTEXT")
    private String texto;

    @Column(name = "date", nullable = true)
    private LocalDate date;

    private String imagePath;



}

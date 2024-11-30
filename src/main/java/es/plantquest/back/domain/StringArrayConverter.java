package es.plantquest.back.domain;

import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

// para poder crear un array de strings en la clase blog sin necesidad de crear una tabla en bd
@Converter(autoApply = true)
public class StringArrayConverter implements AttributeConverter<List<String>, String> {

    @Override
    public String convertToDatabaseColumn(List<String> attribute) {
        if (attribute == null || attribute.isEmpty()) {
            return "";
        }
        return attribute.stream().collect(Collectors.joining(","));
    }

    @Override
    public List<String> convertToEntityAttribute(String dbData) {
        if (dbData == null || dbData.isEmpty()) {
            return List.of();  // Return an empty list if the string is empty
        }
        return Arrays.asList(dbData.split(","));
    }
}

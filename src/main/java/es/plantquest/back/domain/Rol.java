package es.plantquest.back.domain;

import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;

public enum Rol {
    @Enumerated(EnumType.STRING)
    ROL_USER,
    ROL_ADMIN,
}

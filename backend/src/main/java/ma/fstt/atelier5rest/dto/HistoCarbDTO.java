package ma.fstt.atelier5rest.dto;

import java.math.BigDecimal;
import java.time.LocalDate;

public record HistoCarbDTO(
        Long idHisto,
        LocalDate date,
        BigDecimal prix,
        Long stationId,
        String stationNom,
        Long carburantId,
        String carburantNom
) {}
package ma.fstt.atelier5rest.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.time.LocalDate;

@Entity
@Table(name = "histocarb")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class HistoCarb implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idHisto")
    private Long idHisto;

    @Column(name = "date")
    private LocalDate date;

    @Column(name = "prix")
    private double prix;

    @ManyToOne
    @JoinColumn(name = "idStation")
    private Station station;

    @ManyToOne
    @JoinColumn(name = "idCarburant")
    private Carburant carburant;
}

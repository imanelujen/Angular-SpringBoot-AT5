package ma.fstt.atelier5rest.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import ma.fstt.atelier5rest.model.HistoCarb;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "carburant")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Carburant implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idCarburant")
    private Long idCarburant;

    @Column(name = "nom")
    private String nom;

    @Column(name = "description")
    private String description;

}

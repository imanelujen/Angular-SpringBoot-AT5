package ma.fstt.atelier5rest.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import ma.fstt.atelier5rest.model.HistoCarb;

import java.io.Serializable;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "station")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Station implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idStation")
    private Long idStation;

    @Column(name = "nom")
    private String nom;

    @Column(name = "ville")
    private String ville;

    @Column(name = "adresse")
    private String adresse;

}

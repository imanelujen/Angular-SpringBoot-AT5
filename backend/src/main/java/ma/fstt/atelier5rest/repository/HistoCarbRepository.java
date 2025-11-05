package ma.fstt.atelier5rest.repository;

import ma.fstt.atelier5rest.model.HistoCarb;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface HistoCarbRepository extends JpaRepository<HistoCarb,Long> {
    List<HistoCarb> findByCarburantIdCarburant(Long idCarburant);
    List<HistoCarb> findByStationIdStation(Long idStation);
}

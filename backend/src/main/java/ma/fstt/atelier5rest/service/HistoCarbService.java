package ma.fstt.atelier5rest.service;

import ma.fstt.atelier5rest.model.Carburant;
import ma.fstt.atelier5rest.model.HistoCarb;
import ma.fstt.atelier5rest.model.Station;
import ma.fstt.atelier5rest.repository.HistoCarbRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HistoCarbService {
    private final HistoCarbRepository repo;

    public HistoCarbService(HistoCarbRepository repo) {
        this.repo = repo;
    }

    public List<HistoCarb> findAll() { return repo.findAll(); }

    public HistoCarb save(HistoCarb c) { return repo.save(c); }

    public List<HistoCarb> findByStation(Long idStation) { return repo.findByStationIdStation(idStation); }

    public List<HistoCarb> findByCarburant(Long idCarburant) { return repo.findByCarburantIdCarburant(idCarburant); }
}

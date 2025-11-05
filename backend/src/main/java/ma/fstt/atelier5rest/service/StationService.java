package ma.fstt.atelier5rest.service;

import ma.fstt.atelier5rest.model.Station;
import ma.fstt.atelier5rest.repository.StationRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StationService {
    private final StationRepository stationRepository;

    public StationService(StationRepository stationRepository) {
        this.stationRepository = stationRepository;
    }

    public List<Station> findAll() {
        return stationRepository.findAll();
    }
    public Station findById(Long id) {
        return stationRepository.findById(id).orElse(null);
    }
   public Station Save(Station station){
        return stationRepository.save(station);
    }
    public void delete(Long id) {
        stationRepository.deleteById(id); }
}
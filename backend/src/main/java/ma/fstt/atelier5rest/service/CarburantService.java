package ma.fstt.atelier5rest.service;


import ma.fstt.atelier5rest.model.Carburant;
import ma.fstt.atelier5rest.repository.CarburantRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarburantService {
    private final CarburantRepository repo;

    public CarburantService(CarburantRepository repo) {
        this.repo = repo;
    }

    public List<Carburant> findAll() { return repo.findAll(); }

    public Carburant findById(Long id) { return repo.findById(id).orElse(null); }

    public Carburant save(Carburant c) { return repo.save(c); }

    public void delete(Long id) { repo.deleteById(id); }
}

package ma.fstt.atelier5rest.controller;


import ma.fstt.atelier5rest.model.Carburant;
import ma.fstt.atelier5rest.service.CarburantService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/carburants")
@CrossOrigin("*")
public class CarburantController {
    private final CarburantService service;

    public CarburantController(CarburantService service) {
        this.service = service;
    }
    @GetMapping
    public List<Carburant> getAll() {
        return service.findAll();
    }

    @GetMapping("/{id}")
    public Carburant getById(@PathVariable Long id) {
        return service.findById(id);
    }

    @PostMapping
    public Carburant add(@RequestBody Carburant carburant) {
        return service.save(carburant);
    }

    @PutMapping("/{id}")
    public Carburant update(@PathVariable Long id, @RequestBody Carburant carburant) {
        carburant.setIdCarburant(id);
        return service.save(carburant);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }
}
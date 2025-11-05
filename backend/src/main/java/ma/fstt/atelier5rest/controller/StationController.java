package ma.fstt.atelier5rest.controller;


import ma.fstt.atelier5rest.model.Station;
import ma.fstt.atelier5rest.repository.StationRepository;
import ma.fstt.atelier5rest.service.StationService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/stations")
@CrossOrigin("*")
public class StationController {
    private final StationService stationService;

    public StationController(StationService stationService) {
        this.stationService = stationService;
    }
    @GetMapping
    public List<Station> findAll()
    {
        return stationService.findAll();
    }
    @GetMapping("/{id}")
    public Station findOne(@PathVariable Long id){
      return stationService.findById(id);
    }
    @PostMapping
    public Station create(@RequestBody Station station){
        return stationService.Save(station);    }
    @PutMapping("/{id}")
    public Station updateStation(@PathVariable Long id, @RequestBody Station station) {
        station.setIdStation(id);
        return stationService.Save(station);
    }

    @DeleteMapping("/{id}")
    public void deleteStation(@PathVariable Long id) {
        stationService.delete(id);
    }
}

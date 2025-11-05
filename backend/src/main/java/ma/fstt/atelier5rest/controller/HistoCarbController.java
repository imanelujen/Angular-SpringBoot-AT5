package ma.fstt.atelier5rest.controller;

import ma.fstt.atelier5rest.model.HistoCarb;
import ma.fstt.atelier5rest.service.HistoCarbService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/histocarb")
@CrossOrigin("*")
public class HistoCarbController {
    private final HistoCarbService histoCarbService;

    public HistoCarbController(HistoCarbService histoCarbService) {
        this.histoCarbService = histoCarbService;
    }
    @GetMapping
    public List<HistoCarb> findAll()
    {
        return histoCarbService.findAll();
    }
    @PostMapping
    public HistoCarb add(@RequestBody HistoCarb histo) {
        return histoCarbService.save(histo);
    }

    @GetMapping("/station/{idStation}")
    public List<HistoCarb> getByStation(@PathVariable Long idStation){
        return histoCarbService.findByStation(idStation);
    }

    @GetMapping("/carburant/{idCarburant}")
    public List<HistoCarb> getByCarburant(@PathVariable Long idCarburant){
        return histoCarbService.findByCarburant(idCarburant);
    }


}

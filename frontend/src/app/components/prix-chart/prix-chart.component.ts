// src/app/components/prix-chart/prix-chart.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule, AsyncPipe, DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HistoCarbService } from '../../services/histo-carb.service';
import { HistoCarb } from '../../models/histo-carb.model';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-prix-chart',
  standalone: true,
  imports: [CommonModule, AsyncPipe, DatePipe],
  templateUrl: './prix-chart.component.html',
  styleUrls: ['./prix-chart.component.css']
})
export class PrixChartComponent implements OnInit {
  histoData: HistoCarb[] = [];
  stationName = 'Chargement...';

  constructor(
    private histoService: HistoCarbService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    console.log('PrixChart - Route params:', this.route.snapshot.paramMap.get('id'));

    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      const stationId = id ? Number(id) : null;

      console.log('Station ID extrait:', stationId);

      if (!stationId || isNaN(stationId)) {
        console.error('ID station invalide ou manquant');
        this.stationName = 'Erreur : ID station invalide';
        this.histoData = [];
        return;
      }

      this.histoService.getByStation(stationId).subscribe({
        next: (data) => {
          console.log('Prix reçus:', data);
          this.histoData = data || [];
          this.stationName = data && data.length > 0 
            ? data[0].station.nom 
            : `Station ${stationId}`;
        },
        error: (err) => {
          console.error('Erreur API:', err);
          this.stationName = 'Erreur de chargement';
          this.histoData = [];
        }
      });
    });
  }
}

export default PrixChartComponent;
// src/app/components/station-list/station-list.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule, AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { StationService } from '../../services/station.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';  // AJOUTÉ
import { Observable } from 'rxjs';
import { Station } from '../../models/station.model';

@Component({
  selector: 'app-station-list',
  standalone: true,
  imports: [CommonModule, RouterLink, AsyncPipe, MatSnackBarModule],  // AJOUTÉ
  templateUrl: './station-list.component.html',
  styleUrls: ['./station-list.component.css']
})
export class StationListComponent implements OnInit {
  stations$!: Observable<Station[]>;

  constructor(
    private stationService: StationService,
    private snack: MatSnackBar  // AJOUTÉ
  ) {}

  ngOnInit(): void {
    this.stations$ = this.stationService.getAll();
  }

  delete(id: number) {
    if (confirm('Supprimer cette station ?')) {
      this.stationService.delete(id).subscribe({
        next: () => {
          this.stations$ = this.stationService.getAll();  // Recharger la liste
          this.snack.open('Supprimé !', 'OK', { duration: 3000 });
        },
        error: () => {
          this.snack.open('Erreur suppression', 'OK', { duration: 3000 });
        }
      });
    }
  }
}

export default StationListComponent;
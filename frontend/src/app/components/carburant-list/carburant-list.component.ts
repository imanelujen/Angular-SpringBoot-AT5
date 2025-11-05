import { Component, OnInit } from '@angular/core';
import { CommonModule, AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CarburantService } from '../../services/carburant.service';
import { Observable } from 'rxjs';
import { Carburant } from '../../models/carburant.model';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-carburant-list',
  standalone: true,
  imports: [CommonModule, RouterLink, AsyncPipe, MatSnackBarModule],
  templateUrl: './carburant-list.component.html',
  styleUrls: ['./carburant-list.component.css']
})
export class CarburantListComponent implements OnInit {
  carburants$!: Observable<Carburant[]>;

  constructor(
    private service: CarburantService,
    private snack: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.carburants$ = this.service.getAll();
  }

  delete(id: number) {
    if (confirm('Supprimer ce carburant ?')) {
      this.service.delete(id).subscribe({
        next: () => {
          this.carburants$ = this.service.getAll();
          this.snack.open('Supprimé !', 'OK', { duration: 3000 });
        }
      });
    }
  }
}

export default CarburantListComponent;
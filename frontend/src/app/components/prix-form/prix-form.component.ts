// src/app/components/prix-form/prix-form.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { StationService } from '../../services/station.service';
import { CarburantService } from '../../services/carburant.service';
import { HistoCarbService } from '../../services/histo-carb.service';
import { ApiHistoCarb } from '../../models/api-histo-carb.model'; // NOUVEAU

@Component({
  selector: 'app-prix-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatSnackBarModule],
  templateUrl: './prix-form.component.html',
  styleUrls: ['./prix-form.component.css']
})
export class PrixFormComponent implements OnInit {
  form!: FormGroup;
  stations$!: any;
  carburants$!: any;

  constructor(
    private fb: FormBuilder,
    private stationService: StationService,
    private carburantService: CarburantService,
    private histoService: HistoCarbService,
    private snack: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      date: ['', Validators.required],
      prix: ['', [Validators.required, Validators.min(0)]],
      stationId: ['', Validators.required],
      carburantId: ['', Validators.required]
    });

    this.stations$ = this.stationService.getAll();
    this.carburants$ = this.carburantService.getAll();
  }

  onSubmit() {
    if (this.form.valid) {
      const histo: ApiHistoCarb = {  // Utilise ApiHistoCarb
        date: this.form.value.date!,
        prix: +this.form.value.prix!,
        station: { idStation: +this.form.value.stationId! },
        carburant: { idCarburant: +this.form.value.carburantId! }
      };

      this.histoService.add(histo).subscribe({
        next: () => {
          this.snack.open('Prix ajouté !', 'OK', { duration: 3000 });
          this.form.reset();
        },
        error: (err) => {
          console.error('Erreur ajout :', err);
          this.snack.open('Erreur', 'OK', { duration: 3000 });
        }
      });
    }
  }
}

export default PrixFormComponent;
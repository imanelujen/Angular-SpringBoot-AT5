// src/app/components/station-form/station-form.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { StationService } from '../../services/station.service';
import { Station } from '../../models/station.model';

@Component({
  selector: 'app-station-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatSnackBarModule],
  templateUrl: './station-form.component.html',
  styleUrls: ['./station-form.component.css']
})
export class StationFormComponent implements OnInit {
  form!: FormGroup;  // Déclarer seulement
  isEdit = false;
  stationId?: number;

  constructor(
    private fb: FormBuilder,
    private service: StationService,
    private route: ActivatedRoute,
    private router: Router,
    private snack: MatSnackBar
  ) {
    // INITIALISER ICI au lieu de propriété de classe
    this.form = this.fb.group({
      nom: ['', Validators.required],
      ville: ['', Validators.required],
      adresse: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.stationId = +id;
      this.service.getById(this.stationId).subscribe(s => {
        this.form.patchValue(s);
      });
    }
  }

  onSubmit() {
    if (this.form.valid) {
      const action = this.isEdit
        ? this.service.update(this.stationId!, this.form.value)
        : this.service.add(this.form.value);

      action.subscribe({
        next: () => {
          this.snack.open(this.isEdit ? 'Modifié !' : 'Ajouté !', 'OK', { duration: 3000 });
          this.router.navigate(['/stations']);
        },
        error: () => this.snack.open('Erreur', 'OK', { duration: 3000 })
      });
    }
  }

  cancel() {
    this.router.navigate(['/stations']);
  }
}

export default StationFormComponent;
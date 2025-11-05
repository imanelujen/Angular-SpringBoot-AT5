// src/app/components/carburant-form/carburant-form.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { CarburantService } from '../../services/carburant.service';

@Component({
  selector: 'app-carburant-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatSnackBarModule],
  templateUrl: './carburant-form.component.html',
  styleUrls: ['./carburant-form.component.css']
})
export class CarburantFormComponent implements OnInit {
  form!: FormGroup;
  isEdit = false;
  carburantId?: number;

  constructor(
    private fb: FormBuilder,
    private service: CarburantService,
    private route: ActivatedRoute,
    private router: Router,
    private snack: MatSnackBar
  ) {
    this.form = this.fb.group({
      nom: ['', Validators.required],
      description: ['']
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.carburantId = +id;
      this.service.getById(this.carburantId).subscribe(c => this.form.patchValue(c));
    }
  }

  onSubmit() {
    if (this.form.valid) {
      const action = this.isEdit
        ? this.service.update(this.carburantId!, this.form.value)
        : this.service.save(this.form.value);

      action.subscribe({
        next: () => {
          this.snack.open(this.isEdit ? 'Modifié !' : 'Ajouté !', 'OK', { duration: 3000 });
          this.router.navigate(['/carburants']);
        }
      });
    }
  }

  cancel() {
    this.router.navigate(['/carburants']);
  }
}

export default CarburantFormComponent;
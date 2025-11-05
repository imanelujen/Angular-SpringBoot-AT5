// src/app/models/histo-carb.model.ts
export interface Carburant {
  idCarburant: number;
  nom: string;
  description?: string;
}

export interface Station {
  idStation: number;
  nom: string;
  ville: string;
  adresse: string;
}

export interface HistoCarb {
  idHisto?: number;
  date: string;
  prix: number;
  station: Station;      // Objet complet
  carburant: Carburant;  // Objet complet
}
// src/app/models/api-histo-carb.model.ts
export interface ApiHistoCarb {
  date: string;
  prix: number;
  station: { idStation: number };      // SEULEMENT id
  carburant: { idCarburant: number };  // SEULEMENT id
}
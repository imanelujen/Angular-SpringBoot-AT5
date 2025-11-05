# Angular-SpringBoot-AT5

## Description
Application full-stack pour gérer les stations essence, carburants et prix journaliers.  
**Backend** : Spring Boot + JPA + PostgreSQL  
**Frontend** : Angular 20.3.8 + Bootstrap 5

## Fonctionnalités
- CRUD Stations (nom, ville, adresse)
- CRUD Carburants (nom, description)
- Ajout & Historique Prix par station
- Responsive design

## Architecture
atelier5-gestion-carburants/
├── backend/     # Spring Boot API
├── frontend/    # Angular Client
└── README.md

## Installation & Lancement

### Prérequis
- Java 21+
- Node.js 20+
- PostgreSQL 16+

### Backend (Spring Boot)
cd backend
./mvnw spring-boot:run
# API : http://localhost:8080

### Frontend (Angular)
cd frontend
npm install
ng serve
# App : http://localhost:4200


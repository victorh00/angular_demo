import { Routes } from '@angular/router';
import { BancoComponent } from './components/features/banco/banco.component';
import { ChecklistComponent } from './components/features/checklist/checklist.component';
import { CalculadoraComponent } from './components/features/calculadora/calculadora.component';
import { CronometroComponent } from './components/features/cronometro/cronometro.component';
import { HomeComponent } from './components/core/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },  
  { path: 'calculadora', component: CalculadoraComponent },
  { path: 'cronometro', component: CronometroComponent },
  { path: 'checklist', component: ChecklistComponent },
  { path: 'banco', component: BancoComponent }
];  
import { Routes } from '@angular/router';
import { BancoComponent } from './components/features/banco/banco.component';
import { ChecklistComponent } from './components/features/checklist/checklist.component';
import { CalculadoraComponent } from './components/features/calculadora/calculadora.component';
import { CronometroComponent } from './components/features/cronometro/cronometro.component';

export const routes: Routes = [
  { path: 'calculadora', component: CalculadoraComponent },
  { path: 'cronometro', component: CronometroComponent },
  { path: 'checklist', component: ChecklistComponent },
  { path: 'banco', component: BancoComponent }
];  
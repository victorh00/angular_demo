import { Routes } from '@angular/router';
import { BancoComponent } from './components/features/banco/banco.component';
import { ChecklistComponent } from './components/features/checklist/checklist.component';
import { CalculadoraComponent } from './components/features/calculadora/calculadora.component';
import { CronometroComponent } from './components/features/cronometro/cronometro.component';
import { HomeComponent } from './components/core/home/home.component';
import { PainelComponent } from './components/features/memoteca/painel/painel.component';
import { CriarComponent } from './components/features/memoteca/criar/criar.component';
import { MemotecaComponent } from './components/features/memoteca/memoteca/memoteca.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
    title: 'angular sandbox',
  },
  {
    path: 'calculadora',
    component: CalculadoraComponent,
    title: 'calculadora',
  },
  {
    path: 'cronometro',
    component: CronometroComponent,
    title: 'cronômetro',
  },
  {
    path: 'checklist',
    component: ChecklistComponent,
    title: 'checklist',
  },
  {
    path: 'banco',
    component: BancoComponent,
    title: 'banco',
  },
  {
    path: 'memoteca',
    component: MemotecaComponent,
    title: 'memoteca',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: PainelComponent,
      },
      {
        path: 'painel',
        component: PainelComponent,
      },
      {
        path: 'criar',
        component: CriarComponent,
      },
    ],
  },
  // { path: '**', component: NotFound }
];

/*
memoteca
  painelComponent: home. if empty, msg='sem post-its'. botão criar post-it.
  criarComponent: form



*/

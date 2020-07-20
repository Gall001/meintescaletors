import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'menu-almo',
    loadChildren: () => import('./menu-almo/menu-almo.module').then( m => m.MenuAlmoPageModule)
  },
  {
    path: 'menu-fabrica',
    loadChildren: () => import('./menu-fabrica/menu-fabrica.module').then( m => m.MenuFabricaPageModule)
  },
  {
    path: 'carregar-carac',
    loadChildren: () => import('./carregar-carac/carregar-carac.module').then( m => m.CarregarCaracPageModule)
  },
  {
    path: 'cadastrar',
    loadChildren: () => import('./cadastrar/cadastrar.module').then( m => m.CadastrarPageModule)
  },
  {
    path: 'menu-tecnico',
    loadChildren: () => import('./menu-tecnico/menu-tecnico.module').then( m => m.MenuTecnicoPageModule)
  },
  {
    path: 'historico',
    loadChildren: () => import('./historico/historico.module').then( m => m.HistoricoPageModule)
  },
  {
    path: 'contratar',
    loadChildren: () => import('./contratar/contratar.module').then( m => m.ContratarPageModule)
  },
  {
    path: 'editar/:id',
    loadChildren: () => import('./editar/editar.module').then( m => m.EditarPageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

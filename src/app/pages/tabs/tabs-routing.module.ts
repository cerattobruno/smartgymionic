import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'login',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../login/login.module').then(m => m.LoginPageModule)
          }
        ]
      },
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab1/tab1.module').then(m => m.Tab1PageModule)
          }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab2/tab2.module').then(m => m.Tab2PageModule)
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab3/tab3.module').then(m => m.Tab3PageModule)
          }
        ]
      },
      {
        path: 'ficham',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../ficham/ficham.module').then( m => m.FichamPageModule)
          }
        ]
      },
      {
        path: 'observaciones',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../observaciones/observaciones.module').then( m => m.ObservacionesPageModule)
          }
        ]
      },
      {
        path: 'rutina',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../rutina/rutina.module').then( m => m.RutinaPageModule)
          }
        ]
      },
      {
        path: 'actividad',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../actividad/actividad.module').then( m => m.ActividadPageModule)
          }
        ]
      },
      {
        path: 'horarios',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../horarios/horarios.module').then( m => m.HorariosPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}

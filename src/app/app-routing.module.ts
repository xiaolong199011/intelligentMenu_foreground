import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'user',
    loadChildren: () => import('./home/tabs/tabs.module').then(m => m.TabsPageModule),
    runGuardsAndResolvers: 'always',
   },
  {
    path: 'manager',
    loadChildren: () => import('./managerment/tabsmanager/tabsmanager.module').then( m => m.TabsmanagerPageModule)
  },
  {
    path: '**',
    redirectTo: '/user/login',
    pathMatch: 'full'
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules,onSameUrlNavigation: 'reload' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

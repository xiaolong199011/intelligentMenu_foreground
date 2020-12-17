import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/tabs/tabs.module').then(m => m.TabsPageModule)
   },
  {
    path: 'register',
    loadChildren: () => import('./user/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./user/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'menudetail',
    loadChildren: () => import('./cooking/menudetail/menudetail.module').then( m => m.MenudetailPageModule)
  },
  {
    path: 'bbsdetail',
    loadChildren: () => import('./BBS/bbsdetail/bbsdetail.module').then( m => m.BbsdetailPageModule)
  },
  {
    path: 'shoppingdetail',
    loadChildren: () => import('./shopping/shoppingdetail/shoppingdetail.module').then( m => m.ShoppingdetailPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

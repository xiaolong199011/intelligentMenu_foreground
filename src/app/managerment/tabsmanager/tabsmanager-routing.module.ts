import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SigninGuard} from '../../guard/signinGuard'
import { TabsmanagerPage } from './tabsmanager.page';

const routes: Routes = [
  {
    path: 'tabsmanager',
    component: TabsmanagerPage,
    children: [
      {
        path: 'cookingmanager',
        loadChildren: () => import('../cookingmanager/cookingmanager.module').then(m => m.CookingmanagerPageModule), 
      },
      {
        path: 'shoppingmanager',
        loadChildren: () => import('../shoppingmanager/shoppingmanager.module').then( m => m.ShoppingmanagerPageModule),
        canActivate: [SigninGuard],
      },
      {
        path: 'bbsmanager',
        loadChildren: () => import('../bbsmanager/bbsmanager.module').then( m => m.BbsmanagerPageModule),
        canActivate: [SigninGuard],
      },
      {
        path: 'favouritemanager',
        loadChildren: () => import('../favouritemanager/favouritemanager.module').then( m => m.FavouritemanagerPageModule),
        canActivate: [SigninGuard],
      },
      {
        path: 'usermanager',
        loadChildren: () => import('../usermanager/usermanager.module').then( m => m.UsermanagerPageModule),
        canActivate: [SigninGuard],
      },
      {
        path: 'menucommentmanager',
        loadChildren: () => import('../menucommentmanager/menucommentmanager.module').then( m => m.MenucommentmanagerPageModule),
        canActivate: [SigninGuard],
      },
      {
        path: '',
        redirectTo: '/tabs/cooking',
        pathMatch: 'full'
      }
    ]
  },

  {
    path: 'updatemanager',
    component: TabsmanagerPage,
    children: [
      {
        path: 'updatecookingmanager',
        loadChildren: () => import('../updatecookingmanager/updatecookingmanager.module').then( m => m.UpdatecookingmanagerPageModule),
        canActivate: [SigninGuard],
      },
      {
        path: 'updateshoppingmanager',
        loadChildren: () => import('../updateshoppingmanager/updateshoppingmanager.module').then( m => m.UpdateshoppingmanagerPageModule),
        canActivate: [SigninGuard],
      },
      {
        path: 'updatebbstopicmanager',
        loadChildren: () => import('../updatebbstopicmanager/updatebbstopicmanager.module').then( m => m.UpdatebbstopicmanagerPageModule),
        canActivate: [SigninGuard],
      },
      {
        path: 'updatebbscommentmanager',
        loadChildren: () => import('../updatebbscommentmanager/updatebbscommentmanager.module').then( m => m.UpdatebbscommentmanagerPageModule),
        canActivate: [SigninGuard],
      },
      {
        path: 'updatefavouritemanager',
        loadChildren: () => import('../updatefavouritemanager/updatefavouritemanager.module').then( m => m.UpdatefavouritemanagerPageModule),
        canActivate: [SigninGuard],
      },
      {
        path: 'updateusermanager',
        loadChildren: () => import('../updateusermanager/updateusermanager.module').then( m => m.UpdateusermanagerPageModule),
        canActivate: [SigninGuard],
      },
      {
        path: 'updatemenucommentmanager',
        loadChildren: () => import('../updatemenucommentmanager/updatemenucommentmanager.module').then( m => m.UpdatemenucommentmanagerPageModule),
        canActivate: [SigninGuard],
      },
      {
        path: '',
        redirectTo: '/tabs/cooking',
        pathMatch: 'full'
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsmanagerPageRoutingModule {}

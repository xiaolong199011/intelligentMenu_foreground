import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import {SigninGuard} from '../../guard/signinGuard'

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'mytab',
        loadChildren: () => import('../mytab/mytab.module').then(m => m.MytabPageModule),
        canActivate: [SigninGuard],
      },
      {
        path: 'store',
        loadChildren: () => import('../store/store.module').then(m => m.StorePageModule),
        canActivate: [SigninGuard],
      },
      {
        path: 'cooking',
        loadChildren: () => import('../cooking/cooking.module').then(m => m.CookingPageModule),
        canActivate: [SigninGuard],
      },
      {
        path: 'shopping',
        loadChildren: () => import('../shopping/shopping.module').then( m => m.ShoppingPageModule),
        canActivate: [SigninGuard],
      },
      {
        path: 'bbs',
        loadChildren: () => import('../bbs/bbs.module').then( m => m.BBSPageModule),
        canActivate: [SigninGuard],
      },
      {
        path: 'favourite',
        loadChildren: () => import('../favourite/favourite.module').then( m => m.FavouritePageModule),
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
    path: 'register',
    loadChildren: () => import('../../user/register/register.module').then( m => m.RegisterPageModule),
  },
  {
    path: 'login',
    loadChildren: () => import('../../user/login/login.module').then( m => m.LoginPageModule),
    
  },
  {
    path: 'menudetail',
    loadChildren: () => import('../../cooking/menudetail/menudetail.module').then( m => m.MenudetailPageModule),
    //runGuardsAndResolvers: 'always'
    canActivate: [SigninGuard],
  },
  {
    path: 'bbsdetail',
    loadChildren: () => import('../../BBS/bbsdetail/bbsdetail.module').then( m => m.BbsdetailPageModule),
    canActivate: [SigninGuard],
  },
  {
    path: 'shoppingdetail',
    loadChildren: () => import('../../shopping/shoppingdetail/shoppingdetail.module').then( m => m.ShoppingdetailPageModule),
    canActivate: [SigninGuard],
  },
  {
    path: 'menu',
    loadChildren: () => import('../../cooking/menu/menu.module').then( m => m.MenuPageModule),
    canActivate: [SigninGuard],
  },
  {
    path: 'shoppinglist',
    loadChildren: () => import('../../shopping/shoppinglist/shoppinglist.module').then( m => m.ShoppinglistPageModule),
    canActivate: [SigninGuard],
  },
  {
    path: 'shoppingmenu',
    loadChildren: () => import('../../shopping/shoppingmenu/shoppingmenu.module').then( m => m.ShoppingmenuPageModule),
    canActivate: [SigninGuard],
  },
  {
    path: 'bbstopicmenu',
    loadChildren: () => import('../../BBS/bbstopicmenu/bbstopicmenu.module').then( m => m.BbstopicmenuPageModule),
    canActivate: [SigninGuard],
  },
  {
    path: 'bbscommentmenu',
    loadChildren: () => import('../../BBS/bbscommentmenu/bbscommentmenu.module').then( m => m.BbscommentmenuPageModule),
    canActivate: [SigninGuard],
  },
  {
    path: 'admin',
    loadChildren: () => import('../../user/admin/admin.module').then( m => m.AdminPageModule),
  },
  {
    path: 'cookingmanager',
    loadChildren: () => import('../../managerment/cookingmanager/cookingmanager.module').then( m => m.CookingmanagerPageModule),
    canActivate: [SigninGuard],
  },
  {
    path: 'menucomment',
    loadChildren: () => import('../../cooking/menucomment/menucomment.module').then( m => m.MenucommentPageModule),
    canActivate: [SigninGuard],
  },
  {
    path: 'shopcart',
    loadChildren: () => import('../../shopping/shopcart/shopcart.module').then( m => m.ShopcartPageModule)
  },
  {
    path: 'usermenu',
    loadChildren: () => import('../../cooking/usermenu/usermenu.module').then( m => m.UsermenuPageModule)
  },
  {
    path: '**',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }

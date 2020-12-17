import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'mytab',
        loadChildren: () => import('../mytab/mytab.module').then(m => m.MytabPageModule)
      },
      {
        path: 'store',
        loadChildren: () => import('../store/store.module').then(m => m.StorePageModule)
      },
      {
        path: 'cooking',
        loadChildren: () => import('../cooking/cooking.module').then(m => m.CookingPageModule)
      },
      {
        path: 'shopping',
        loadChildren: () => import('../shopping/shopping.module').then( m => m.ShoppingPageModule)
      },
      {
        path: 'bbs',
        loadChildren: () => import('../bbs/bbs.module').then( m => m.BBSPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/cooking',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/cooking',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }

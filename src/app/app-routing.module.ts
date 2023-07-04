import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GalleryComponent } from './gallery/gallery.component';
import { WalletsComponent } from './wallets/wallets.component';
import { UsersAdminPanelComponent } from './admin-panel/users-admin-panel/users-admin-panel.component';
import { CollectionsAdminPanelComponent } from './admin-panel/collections-admin-panel/collections-admin-panel.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'wallets', component: WalletsComponent },
  {
    path: 'admin', component: AdminPanelComponent, children: [
      { path: 'users', component: UsersAdminPanelComponent },
      { path: 'collections', component: CollectionsAdminPanelComponent }
    ]
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

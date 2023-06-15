import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

/* Traducción */
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

/* Componentes y páginas */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GalleryComponent } from './gallery/gallery.component';
import { NftCardComponent } from './gallery/nft-card/nft-card.component';
import { WalletsComponent } from './wallets/wallets.component';
import { FilterComponent } from './gallery/filter/filter.component';
import { WalletCardComponent } from './wallets/wallet-card/wallet-card.component';
import { AddWalletComponent } from './wallets/add-wallet/add-wallet.component';
import { AddWalletModalComponent } from './wallets/add-wallet/add-wallet-modal/add-wallet-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { UsersAdminPanelComponent } from './admin-panel/users-admin-panel/users-admin-panel.component';
import { CollectionsAdminPanelComponent } from './admin-panel/collections-admin-panel/collections-admin-panel.component';

import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { AddCollectionModalComponent } from './admin-panel/collections-admin-panel/add-collection-modal/add-collection-modal.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MessageComponent } from './components/message/message.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LoaderComponent } from './components/loader/loader.component';

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent,
    GalleryComponent,
    FilterComponent,
    AdminPanelComponent,
    UsersAdminPanelComponent,
    CollectionsAdminPanelComponent,
    WalletsComponent,
    FilterComponent,
    WalletCardComponent,
    AddWalletComponent,
    AddWalletModalComponent,
    NftCardComponent,
    AddCollectionModalComponent,
    MessageComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

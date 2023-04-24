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
import { LoginComponent } from './home-page/login/login.component';
import { RegisterComponent } from './home-page/register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GalleryComponent } from './gallery/gallery.component';
import { NftCardComponent } from './gallery/nft-card/nft-card.component';
import { WalletsComponent } from './wallets/wallets.component';
import { FilterComponent } from './components/filter/filter.component';
import { WalletCardComponent } from './wallets/wallet-card/wallet-card.component';
import { AddWalletComponent } from './wallets/add-wallet/add-wallet.component';
import { AddWalletModalComponent } from './wallets/add-wallet/add-wallet-modal/add-wallet-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import Moralis from 'moralis/.';


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
    NftCardComponent,
    WalletsComponent,
    FilterComponent,
    WalletCardComponent,
    AddWalletComponent,
    AddWalletModalComponent
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
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

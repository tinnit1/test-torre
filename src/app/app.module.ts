import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {StoreModule} from '@ngrx/store';
import {appReducers} from './store/app.reducer';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment.prod';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SharedService} from './services/shared/shared.service';
import {EffectsModule} from '@ngrx/effects';
import {effectsArray} from './store/effects';
import {UserService} from './services/user/user.service';
import {HttpClientModule} from '@angular/common/http';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import {SharedModule} from './shared/shared.module';
import {AppMaterialModule} from './app-material.module';
import {PagesModule} from './pages/pages.module';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  exports: [
    AppMaterialModule
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    PagesModule,
    // Modulo de material
    AppMaterialModule,
    // modulos NgRx
    // este modulo instancia y carga los reducers que esten en appReducers.
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot(effectsArray),
    // modulo para herramientas de desarrollo.
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [SharedService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

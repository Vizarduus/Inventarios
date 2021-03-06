import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClient, HttpClientModule } from '@angular/common/http';
///import { IonicSignaturePadModule,IonicsignaturepadProvider } from 'ionicsignaturepad';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegistrosPage } from '../pages/registros/registros';
import { RestProvider } from '../providers/rest/rest';
import { CrearVisitantePage } from '../pages/crear-visitante/crear-visitante';
import { SalidaVisitantePage } from '../pages/salida-visitante/salida-visitante';
import { SignaturePadModule } from 'angular2-signaturepad';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegistrosPage,
    CrearVisitantePage,
    SalidaVisitantePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    SignaturePadModule,
    //IonicSignaturePadModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegistrosPage,
    CrearVisitantePage,
    SalidaVisitantePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpClient,
    //IonicsignaturepadProvider,
    RestProvider
  ]
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SalidaVisitantePage } from './salida-visitante';

@NgModule({
  declarations: [
    SalidaVisitantePage,
  ],
  imports: [
    IonicPageModule.forChild(SalidaVisitantePage),
  ],
})
export class SalidaVisitantePageModule {}

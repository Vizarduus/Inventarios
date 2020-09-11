import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CrearVisitantePage } from './crear-visitante';

@NgModule({
  declarations: [
    CrearVisitantePage,
  ],
  imports: [
    IonicPageModule.forChild(CrearVisitantePage),
  ],
})
export class CrearVisitantePageModule {}

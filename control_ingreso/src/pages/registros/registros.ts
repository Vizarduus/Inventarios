import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { CrearVisitantePage } from '../crear-visitante/crear-visitante';
import { SalidaVisitantePage } from '../salida-visitante/salida-visitante';
/**
 * Generated class for the RegistrosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registros',
  templateUrl: 'registros.html',
})
export class RegistrosPage {

  registros: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
  }

  ionViewDidLoad() {
    this.consultarRegistros();
  }
  consultarRegistros() {
    this.restProvider.getRegistros()
      .then(data => {
          this.registros = data;
          console.log(this.registros);
          console.log(this.registros.filter(data => {
          if (data.fecha_fin == null){
            return true;
          }
          return false;
        }));
      });
  }

  crearVisitante() {
    this.navCtrl.push(CrearVisitantePage);
  }

  
  
  salidaVisitante(id) {
    this.navCtrl.push(SalidaVisitantePage,{id:id});
  }


}

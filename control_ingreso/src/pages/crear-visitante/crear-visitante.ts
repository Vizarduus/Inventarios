import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { RegistrosPage } from '../registros/registros';



/**
 * Generated class for the CrearVisitantePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-crear-visitante',
  templateUrl: 'crear-visitante.html',
})
export class CrearVisitantePage {

  nombre: String;
  cedula: String;
  empresa: String;
  motivo: String;

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
  }

  iniciarRegistro() {
    var data = {
      'nombre': this.nombre,
      'cedula': this.cedula,
      'empresa': this.empresa,
      'motivo': this.motivo,
    };
    this.restProvider.crearRegistros(data).then((result: any) => {
      console.log(result);
      this.navCtrl.setRoot(RegistrosPage);
    }, (err) => {
      console.log(err);
    });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad CrearVisitantePage');
  }

}

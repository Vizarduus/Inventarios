import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { RegistrosPage } from '../registros/registros'
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  usuario: any;
  clave: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
  }

  
  iniciarSesion() {
  var data = { 'username': this.usuario, 'password': this.clave };
   this.restProvider.login(data).then(result => {
     const newLocal = 'key';
       window.localStorage['token'] = result[newLocal];
        this.navCtrl.setRoot(RegistrosPage);
       // console.log(data);
      }, (err) => {
      console.log(err);
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}

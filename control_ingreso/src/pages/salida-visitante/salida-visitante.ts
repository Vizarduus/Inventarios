import { Component, ViewChild  } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';

/**
 * Generated class for the SalidaVisitantePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-salida-visitante',
  templateUrl: 'salida-visitante.html',
  template: '<signature-pad [options]="signaturePadOptions" (onBeginEvent)="drawStart()" (onEndEvent)="drawComplete()"></signature-pad>'
})
export class SalidaVisitantePage {

  valor: any;
  id: any;

  @ViewChild(SignaturePad) signaturePad: SignaturePad;

  public signaturePadOptions: Object = { // passed through to szimek/signature_pad constructor
    'minWidth': 5,
    'canvasWidth': 500,
    'canvasHeight': 300
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
    this.id = navParams.get('id');
    this.restProvider.consultarVisitante(this.id)
    .then(data => {
      this.valor = data;
      console.log(this.valor);
    });
  }

  ionViewDidLoad() {
    this.consultarRegistrosVisitante();
  }
  consultarRegistrosVisitante() {

  }

  ngAfterViewInit() {
    this.signaturePad.set('minWidth', 5);
    this.signaturePad.clear();
  }

  drawComplete() {
    console.log(this.signaturePad.toDataURL());
  }

  drawStart() {
    console.log('begin drawing');
  }
}

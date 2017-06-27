import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtrl: AlertController) {

    this.navParams.get("name");
    this.navParams.get("pass");
  }

  ionViewDidLoad(){
    document.getElementById('nombre').innerHTML = this.navParams.get("name");
    document.getElementById('clave').innerHTML = this.navParams.get("pass");
  }
}
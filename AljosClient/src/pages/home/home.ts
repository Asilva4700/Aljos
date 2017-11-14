import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController) {

  }
  presentAlert(){
    let alert = this.alertCtrl.create({
      title: 'Esto es una alerta de prueba.',
      subTitle: 'Es de prueba.',
      buttons: ['OK']
    });
    alert.present();
  }

  login(){
    let alert = this.alertCtrl.create({
      title: 'Login',
      inputs: [
        {
          name: 'username',
          placeholder: 'Username'
        },
        {
          name: 'pass',
          placeholder: 'Pass',
          type: 'password'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Login',
          handler: data => {
            if(data.username == "admin" && data.pass == "123456"){
              //logeado
              this.navCtrl.push(LoginPage, {
                name: data.username,
                pass: data.pass
              });
            }else{
              //not today
              let alert = this.alertCtrl.create({
                title: 'Usuario o contraceña invalida.',
                subTitle: 'Intente de nuevo.',
                buttons: ['OK']
              });
              alert.present();
              return false;
            }
          }
        }
      ]
    });
    alert.present();
  }
}

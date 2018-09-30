import { Component } from '@angular/core';

// @ts-ignore
import { Component,viewChild } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
// @ts-ignore



import { HomePage } from '../home/home';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }
  RegisterUser() {
    this.navCtrl.push(HomePage);
  }
  RegSuccess() {
      var alert = this.alertCtrl.create({
        title: "Registered Success",
        subTitle: "Opened Account",
        buttons: ['ok']
      });
      alert.present();
    }
  }


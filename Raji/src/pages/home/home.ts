import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// @ts-ignore
import { Component,viewChild } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
// @ts-ignore


import { AboutPage} from "../about/about";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  uname: String;
  pwd: String;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  NewUser() {
    this.navCtrl.push(AboutPage);
  }

  Success() {
    // alert("Login Successful");
    if (this.uname == "raji" && this.pwd == "1234") {
      var alert = this.alertCtrl.create({
        title: "Successful Login",
        subTitle: "Welcome" + " " + this.uname,
        buttons: ['ok']

      });
      alert.present();
    }else{
      // @ts-ignore
      let alert = this.alertCtrl.create({
        title:"Failed!!!",
        subTitle: "Check Credentials",
        buttons:['ok']
      });
      alert.present();
    }
  }
}


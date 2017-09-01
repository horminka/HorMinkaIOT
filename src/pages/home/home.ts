import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BoardInfoProvider } from '../../providers/board-info/board-info'; 

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  toggleLed: boolean;
  toggleRelay: boolean;
  constructor(public navCtrl: NavController, public infoService: BoardInfoProvider) {
  this.toggleLed = true;
  this.toggleRelay = false;

  }
  ionViewDidLoad(){
  	//this.infoService.gettiempo();
  	//this.infoService.postorden();
  }

  verled(){
  	//console.log("test");
  	//console.log(this.toggleLed);
  	if(this.toggleLed == true){
  		console.log("prender led");
  		this.infoService.postled(false);

  	}
  	else{
  		console.log("apagar led");
  		this.infoService.postled(true);
  	}
  }

verrelay(){
  	//console.log("test");
  	//console.log(this.toggleRelay);
  	if(this.toggleRelay == false){
  		//console.log("prender bombillo");
  		this.infoService.postrelay(false);

  	}
  	else{
  		//console.log("apagar bombillo");
  		this.infoService.postrelay(true);
  	}
  }


}

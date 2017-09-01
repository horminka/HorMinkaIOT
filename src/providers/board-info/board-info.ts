import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the BoardInfoProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class BoardInfoProvider {

  constructor(public http: Http) {
    //console.log('Hello BoardInfoProvider Provider');
  }
/*
  gettiempo(){

  	let headers = new Headers();
  	*/
  	//headers.append('Accept', 'application/json, text/plain, */*')
  	/*headers.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkZXYiOiJOb2RlTUNVIiwiaWF0IjoxNTAzNTgwNjUwLCJqdGkiOiI1OTllZDFlYTQ2OWZlZmIwMjIyYTY1MzciLCJ1c3IiOiJpb3Rlc3QifQ.Q8gxauMJedibQz9L7C-HnpdTSwowRq-62oRuOZ6eutM');



  	//this.http.get('http://192.168.1.2/v2/users/iotest/devices/NodeMCU/millis', {headers: headers})
  	this.http.get('http://10.0.0.2/v2/users/iotest/devices/NodeMCU/millis', {headers: headers})
  		.map(res => res.json())
  		.subscribe(data => {
  		console.log(data);
  		});

  }
*/
  postled(estado){

  	let headers = new Headers();
  	headers.append('Accept', 'application/json, text/plain, */*')
  	headers.append('Content-Type', 'application/json;charset=UTF-8')
  	headers.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkZXYiOiJOb2RlTUNVIiwiaWF0IjoxNTAzNTgwNjUwLCJqdGkiOiI1OTllZDFlYTQ2OWZlZmIwMjIyYTY1MzciLCJ1c3IiOiJpb3Rlc3QifQ.Q8gxauMJedibQz9L7C-HnpdTSwowRq-62oRuOZ6eutM');

  	let body = {
  		"in": estado			
  	};


  	this.http.post('http://10.0.0.2/v2/users/iotest/devices/NodeMCU/led', JSON.stringify(body), {headers: headers})
  		.map(res => res.json())
  		.subscribe(data => {
  		console.log(data);
  		})	
  }

postrelay(estado){

  	let headers = new Headers();
  	headers.append('Accept', 'application/json, text/plain, */*')
  	headers.append('Content-Type', 'application/json;charset=UTF-8')
  	headers.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkZXYiOiJOb2RlTUNVIiwiaWF0IjoxNTAzNTgwNjUwLCJqdGkiOiI1OTllZDFlYTQ2OWZlZmIwMjIyYTY1MzciLCJ1c3IiOiJpb3Rlc3QifQ.Q8gxauMJedibQz9L7C-HnpdTSwowRq-62oRuOZ6eutM');

  	let body = {
  		"in": estado			
  	};


  	this.http.post('http://10.0.0.2/v2/users/iotest/devices/NodeMCU/relay', JSON.stringify(body), {headers: headers})
  		.map(res => res.json())
  		.subscribe(data => {
  		console.log(data);
  		})	
  }


}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient , HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController , public http : HttpClient) {

  }

    getData(){

        let headers = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');
        headers = headers.append('Authorization', 'Basic youToken' );



         let urlData                        : any = "yourUrl/getData.xsjs";

      this.http.get(urlData ,  {headers: headers}  )
      .subscribe((data : any) =>
      {
        console.log(data);
      },
      (error : any) =>
      {
         console.dir(error);
      });
   }


}

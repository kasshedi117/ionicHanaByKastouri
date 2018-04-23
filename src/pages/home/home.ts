import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Base64 } from '@ionic-native/base64';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

constructor(  
            public navCtrl: NavController , 
            public http : HttpClient) {

  }

    getData(){


                    let token = btoa("userName:Password");

                    let headers = new HttpHeaders();
                    headers = headers.append('Content-Type', 'application/json');
                    headers = this.headers.append('Authorization', 'Basic '+token );

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

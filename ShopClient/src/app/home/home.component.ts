import { Component, OnInit } from '@angular/core';
import { RestHandlerService } from '../services.service';
import { Router } from '@angular/router';
import { ui_url } from '../configs/const';

declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [RestHandlerService]
})
export class HomeComponent implements OnInit {
  urlPic: String;
  private sessionid: string;
  constructor(private restHandlerService: RestHandlerService, private router: Router) {
    this.urlPic = "";
    if (localStorage.getItem('session') == null) {
      // alert('You cannot this page!555');
      $(location).attr('href', ui_url + '/');
    }
    else {
      this.sessionid = localStorage.getItem('session').split('"')[3];
      this.restHandlerService.postData({
        sessionid: this.sessionid
      }, '/checkSession').subscribe(res => {
        if (res[0].success == 'true') { }
        else {
          // alert('You cannot this page!');
          $(location).attr('routerLink', ui_url + '/');
        }
      })
    }
  }

  ngOnInit() {
      
  }

  pic(): void {
    this.restHandlerService.getData('/pic').subscribe(res => {
      console.log(res)
      if (res.success) {
        var x = document.createElement("img");
        x.setAttribute("src", res.dataURL);
        document.getElementById('jane').appendChild(x);
      }
      else {
        alert('Your username or Password incorect!');
      }
    });
  }

  logout(): void {
    console.log('test')
    this.sessionid = localStorage.getItem('session').split('"')[3];
    this.restHandlerService.postData({
      sessionid: this.sessionid
    }, '/updateSession').subscribe(res => {
      localStorage.clear();
    })
  }
}

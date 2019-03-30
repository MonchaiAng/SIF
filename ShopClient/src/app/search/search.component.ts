import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestHandlerService } from '../services.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  count: number;
  name: String;
  cartoon: String;
  startprice: number;
  endprice: number;
  getStock: any;
  getImage: any;
  price:any;
  path:any;

  constructor(private restHandlerService: RestHandlerService, private router: Router) {
    this.count = 0;
    this.name = "";
    this.cartoon = "";
    this.price = 0;
    this.path = []; 
    this.getStock = []
  }

  ngOnInit() {
    
    this.showStock();
    
  }

  showStock() {
    this.restHandlerService.getStock().subscribe(
      (data) => {
        console.log(data);
        this.getStock.push(data)
      },
      (error) => alert(error),
      () => console.log("Complete!")
    );
    
    // this.restHandlerService.getImage().subscribe(
    //   (data) => {
    //     console.log(data)
    //     this.getImage = data
    //   },
    //   (error) => alert(error),
    //   () => console.log('complete!')
    // );
  }



  
}

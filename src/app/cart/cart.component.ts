import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public wishlist=[];


  constructor( private http : HttpClient) { }

  ngOnInit() {
    this.http.get("http://localhost:2678/api/wish").subscribe((data:any) => {
  
    console.log(data);
    this.wishlist = data;

  }) 
  }

}


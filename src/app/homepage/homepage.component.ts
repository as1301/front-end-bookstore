import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  public books =[]
  constructor(private http : HttpClient) { }

  ngOnInit() {
    this.http.get("http://localhost:2678/api/home").subscribe((data:any) => {
      this.books = data;
     
    })
  }

  buy(book){
   this.http.post("http://localhost:2678/api/wish",{
    "seller": book.seller,
    "name":book.name,
    "author" : book.author,
    "price" : book.price,
    "condition" : book.condition
  }).subscribe(res=> alert("You book has been added to cart"))
    
  }

  describe(book){
    alert(book.description)
  }

  search(abc){
    this.http.post("http://localhost:2678/api/search",{
      "name" : abc 
    }).subscribe((data:any) => {
      this.books = data;
     
    })
    
  }
  

  filter(a){
    console.log(a)
    if(a=="all")
    {
      this.http.get("http://localhost:2678/api/filterc").subscribe((data:any) => {
        this.books = data;
       console.log("inside all")
      })
    }
    else{
    this.http.post("http://localhost:2678/api/filterc",{
      "condition" : a
    }).subscribe((data:any) => {
      this.books = data;
     
    })
  }
  }

  filter2(b){
    console.log(b)
    if(b=="all")
    {
      this.http.get("http://localhost:2678/api/filterp").subscribe((data:any) => {
        this.books = data;
       console.log("inside all")
      })
    }
    else{
    this.http.post("http://localhost:2678/api/filterp",{
      "price" : b
    }).subscribe((data:any) => {
      this.books = data;
     
    })
  } 
  }

}

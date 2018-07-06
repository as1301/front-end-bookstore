import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
   public msgs=[]
   toggle = true;
  constructor(private http : HttpClient) { }

  ngOnInit() {
  }
   

  retrieve(un) {
    this.toggle = false;
    this.http.post("http://localhost:2678/api/smessage",{
      "username" : un
    }).subscribe((data:any) => {
      this.msgs = data;
     
    })
  }
   
   send(from,to,message){
     this.http.post("http://localhost:2678/api/messages",{
      "from" : from ,
      "to" : to ,
      "msg" : message
    }).subscribe((data:any) => {
     console.log(data)
    })

    alert("message sent")
   }


}

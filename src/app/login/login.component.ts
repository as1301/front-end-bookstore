import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup,Validator} from '@angular/forms';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myform : FormGroup
  fileToUpload: File = null;
  path =  "/login"
  toggle= true;
  constructor(
    private fb: FormBuilder, 
    private http: HttpClient
  ) { };

  ngOnInit() {
    this.myform = this.fb.group({
     
      email:"",
      password:"",
    
  });
  }

  onSubmit(){
    const values = this.myform.value;
    
    console.log(values);
    this.postdata(values);
  }

  postdata(data){

    console.log(data);
    this.http.post('http://localhost:2678/api/login',data).subscribe((data:any) => {
      console.log(data);
      let res=JSON.stringify(data);
      if(data.length>0){
        console.log(data.length);
        alert("Successful login");
        this.toggle = false;
        this.path = '/homepage';
      }
      else {
        alert("user not found");
        this.toggle = true;
        this.path = '/login';
      }
    });
  }

}

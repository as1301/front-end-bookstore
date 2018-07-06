import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup,Validator} from '@angular/forms';
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  myform : FormGroup
  fileToUpload: File = null;
  constructor(
    private fb: FormBuilder, 
    private http: HttpClient
  ) { };

  ngOnInit() {
    this.myform = this.fb.group({
      firstName:"",
      lastName:"", 
      email:"",
      password:"",
      college:"",
      phone:"",
      address:"",
     
     
  });
  }

  onSubmit(){
    const values = this.myform.value;
    
    console.log(values);
    this.postdata(values);
  }
  postdata(data){

    console.log(data);
    this.http.post('http://localhost:2678/api/users',data).subscribe((data:any) => {
      console.log(data);
      alert("user registered")
    });
  }

}

import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup,Validator} from '@angular/forms';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  myform : FormGroup
  fileToUpload: File = null;
  constructor(
    private fb: FormBuilder, 
    private http: HttpClient
  ) { };

  ngOnInit() {
    this.myform = this.fb.group({
      seller :"",
      name :"", 
      author :"",
      price :"",
      condition:"",
      img : "",
      desc : ""
  });
  }

  onSubmit(){
    const values = this.myform.value;
    
    console.log(values);
    this.postdata(values);
  }
  postdata(data){

    console.log(data);
    this.http.post('http://localhost:2678/api/home',data).subscribe((data:any) => {
      console.log(data);
      alert("book added")
    });
  }

}

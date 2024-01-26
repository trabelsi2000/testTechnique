import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserserviceService } from '../services/userservice.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent implements OnInit{
 
  forminput!:FormGroup
  constructor(private fb:FormBuilder,private route:Router,private userserv:UserserviceService) {
  }
  ngOnInit(): void {
    this.forminput=this.fb.group(
      {"username":["",[Validators.required]],
      "password":["",Validators.required]
    })
  }
  onsubmit(){
    if(this.forminput.valid){
      this.userserv.connect(this.forminput.controls["username"].value,this.forminput.controls["password"].value).subscribe(
        ()=>{
          this.route.navigate(["/contactus"])
        });
         }
  
        }
    
    }
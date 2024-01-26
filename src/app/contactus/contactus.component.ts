import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { contact } from '../models/contact.model';
import { UserserviceService } from '../services/userservice.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css'
})
export class ContactusComponent implements OnInit{


  forminput!: FormGroup
  constructor(private fb:FormBuilder,private route:Router,private contactserv:UserserviceService){
  }
  
  ngOnInit(): void {
    this.forminput=this.fb.group(
      { "username":["",Validators.required],
        "email":["",Validators.required],
        "message":["",Validators.required]})
  }
  
  Send(){
    let cont = new contact()

    cont.email= this.forminput.controls['email'].value
    cont.username= this.forminput.controls['username'].value
    cont.message= this.forminput.controls['message'].value  
    
    this.contactserv.sendMessage(cont).subscribe(
      () => {})
    if(this.forminput.valid){
      this.route.navigate(["/espaceadmin"])
    }
  }
}

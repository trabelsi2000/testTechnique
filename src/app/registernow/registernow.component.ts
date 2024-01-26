import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { user } from '../models/User.model';
import { UserserviceService } from '../services/userservice.service';

@Component({
  selector: 'app-registernow',
  templateUrl: './registernow.component.html',
  styleUrls: ['./registernow.component.css']
})
export class RegisternowComponent implements OnInit{

  forminput!: FormGroup;
  constructor(private fb:FormBuilder,private route:Router,private userserv:UserserviceService){
  }
  
  ngOnInit(): void {
    this.forminput=this.fb.group(
      { "username":["",Validators.required],
        "email":["",Validators.required],
        "fname":["",Validators.required],
        "lname":["",Validators.required],
        "tel":["",Validators.required],
        "password":["",Validators.required],
        "confirmPassword": ['', [Validators.required]]

    }, {
      validator: this.passwordMatchValidator
    })
  }
  passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
  
    if (!password || !confirmPassword) {
      return null;
    }
  
    if (password.value !== confirmPassword.value) {
      return { 'passwordMismatch': true };
    }
  
    return null;
  }
  register(){
    let usr = new user()

    usr.email= this.forminput.controls['email'].value
    usr.username= this.forminput.controls['username'].value
    usr.fname= this.forminput.controls['fname'].value
    usr.lname= this.forminput.controls['lname'].value
    usr.tel= this.forminput.controls['tel'].value
    usr.password= this.forminput.controls['password'].value   
    usr.confirmpassword= this.forminput.controls['confirmPassword'].value
    
    this.userserv.signup(usr).subscribe(
      (users) => {console.log(users.accessToken)})
    if(this.forminput.valid){
      this.route.navigate(["/signin"])
    }
  }
}

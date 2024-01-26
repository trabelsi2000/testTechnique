import { Component, OnInit } from '@angular/core';
import { user } from '../models/User.model';
import { ActivatedRoute, Router } from '@angular/router';
import { UserserviceService } from '../services/userservice.service';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrl: './updateuser.component.css'
})
export class UpdateuserComponent implements OnInit{

  id!:number;
  user!:user;
  constructor(private userserv:UserserviceService,private route:ActivatedRoute,private router:Router){}

  ngOnInit(): void {
    this.user=new user;
    this.id=this.route.snapshot.params['id'];
    
   this.userserv.getUserById(this.id).subscribe(data =>{
    this.user=data;
   }, error => console.log(error));
  }
 
  onSubmit(){
   this.userserv.updateUser(this.id,this.user).subscribe(data=>{
    this.goToUserList();
 }, error => console.log(error));
  }
  
  goToUserList(){
    this.router.navigate(['/espaceadmin'])
  }

}

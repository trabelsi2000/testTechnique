import { Component, OnInit } from '@angular/core';
import { user } from '../models/User.model';
import { Router } from '@angular/router';
import { UserserviceService } from '../services/userservice.service';

@Component({
  selector: 'app-espaceadmin',
  templateUrl: './espaceadmin.component.html',
  styleUrl: './espaceadmin.component.css'
})
export class EspaceadminComponent implements OnInit{

  Alert: boolean = false;
  listusr:user[]=[]
  constructor(private userserv:UserserviceService,private route:Router){

  }
  ngOnInit(): void {
    this.userserv.getAllUsers().subscribe(
      (tab)=>(
        this.listusr=tab
      )
    )
  }
  deleteUser(id:number){
    this.userserv.deleteUser(id).subscribe(data => {
      this.userserv.getAllUsers();
    })
    setTimeout(() => {
      this.Alert = true;
      setTimeout(() => {
        location.reload();
      }, 2000);
    }, 0);
    }
  
    updateUser(id:number){
      this.route.navigate(['/updateuser',id])
    }
}
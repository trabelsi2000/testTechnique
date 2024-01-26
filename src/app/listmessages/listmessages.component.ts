import { Component, OnInit } from '@angular/core';
import { contact } from '../models/contact.model';
import { UserserviceService } from '../services/userservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listmessages',
  templateUrl: './listmessages.component.html',
  styleUrl: './listmessages.component.css'
})
export class ListmessagesComponent  implements OnInit{

  Alert: boolean = false;
  listmess:contact[]=[]
  constructor(private userserv:UserserviceService,private route:Router){

  }
  ngOnInit(): void {
    this.userserv.getAllMessages().subscribe(
      (tab)=>(
        this.listmess=tab
      )
    )
  }
  deleteMessage(id:number){
    this.userserv.deleteMessage(id).subscribe(data => {
      this.userserv.getAllMessages();
    })
    setTimeout(() => {
      this.Alert = true;
      setTimeout(() => {
        location.reload();
      }, 2000);
    }, 0);
    }
  }
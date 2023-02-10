import { Component, OnInit } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit{
  userId:number
  user:any
  constructor(public activatedRoute:ActivatedRoute,private userservice:UsersService){
     this.userId=this.activatedRoute.snapshot.params['id'];

  }
  ngOnInit(): void {
    this.userservice.getUserById(this.userId).subscribe((response)=>{
      this.user=response
    })
  }

}

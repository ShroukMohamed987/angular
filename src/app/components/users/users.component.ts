import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from './../../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  alluser: any;
  userid: any;

  constructor(private router: Router, private userservice: UsersService) {}
  ngOnInit(): void {
    
    this.userservice.getAllUsers().subscribe((response) => {
      this.alluser = response;
    });
  }
  delete(id: any) {
    this.userservice.deleteUser(id).subscribe((response) => {
      this.alluser = this.alluser.filter((item: any) => {
        return item.id != id;
      });
    });
  }
  update(id: any) {
    this.router.navigate([`/adduser/:${id}`]);
  }
  addUserFun() {
    this.router.navigate(['/adduser/new']);
  }
}

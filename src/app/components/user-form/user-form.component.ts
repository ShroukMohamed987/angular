import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { from } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';
import { User } from './../../services/userInterface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {
  user: any;
  emailValue: string = '';
  passValue: string = '';
userId:any
  userForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });
  constructor(private userService: UsersService,private activatedRoute:ActivatedRoute) {
    this.userId=this.activatedRoute.snapshot.params['id'];
    this.userService.getAllUsers().subscribe((response) => {
      this.user = response;
    });
  }

  LoginFun(e: Event) {
   
    //////
    e.preventDefault();
    if(this.userId){
      //update
      const sameUser: User = {
        id: this.userId,
        email: this.emailValue || this.user[this.userId].email,
  
        password: this.passValue || this.user[this.userId].password,
      };
  
      if (this.userForm.status == 'VALID') {
        this.userService.editUser(this.userId, sameUser).subscribe((response) => {
          console.log(response);
          this.emailValue = '';
          this.passValue = '';
  
          alert('update successfuly !!!');
        });
      }
    }else{
      //add
      const newUser: User = {
        id: this.user[this.user.length - 1].id + 1,
        email: this.emailValue,
        password: this.passValue,
      };
      if (this.userForm.status == 'VALID') {
        this.userService.addNewUser(newUser).subscribe((response) => {
          console.log(response);
  
          alert('add successfuly !!!');
        });
      }

    }
  
  }
  get getemail() {
    return this.userForm.controls['email'];
  }

  get getPass() {
    return this.userForm.controls['password'];
  }

  ngOnInit(): void {}
}

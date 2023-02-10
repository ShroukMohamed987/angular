import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UsersComponent } from './components/users/users.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

import { Routes , RouterModule } from '@angular/router';
import { UserFormComponent } from './components/user-form/user-form.component';

import { NotFoundComponent } from './components/not-found/not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from './services/users.service';

const routes:Routes=[
 {path:'',component:UsersComponent},
 {path:'users',component:UsersComponent},
 {path:'userDetails/:id',component:UserDetailsComponent},
 {path:'adduser/new',component:UserFormComponent},
 {path:'adduser/:id',component:UserFormComponent},
 //{path:'adduser/:id',component:UpdateFormComponent},
 
 {path:'**',component:NotFoundComponent}

];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UsersComponent,
    
    UserDetailsComponent,
    
    UserFormComponent,
    NotFoundComponent
  ],
  imports: [
  
  RouterModule.forRoot(routes),
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }

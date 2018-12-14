import { Component, OnInit } from '@angular/core';
import { User } from './User';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  // powers = ['Really Smart', 'Super Flexible',
  // 'Super Hot', 'Weather Changer'];

  userModel = new User('','','','','');
   submitted=false;
  onSubmit()
  {
    this.submitted=true;
  }
  constructor(private router:Router) { }

  ngOnInit() {
  
  }
  // Registration()
  //  {
    
  //    const promise = this.router.navigate(['./navbar']);
  
  //  }
}

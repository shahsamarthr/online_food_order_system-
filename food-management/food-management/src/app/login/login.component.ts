import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public username: string;
  public password: string;
  
  public result: string;
  public obj: AppComponent;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  public Login(){
    if (this.username === 'user1' && this.password === 'user1') {
      sessionStorage.setItem('sessionId',this.username);
      this.result = '';  
      this.router.navigateByUrl('/navbar');
      //this.obj.LoggedIn();
    } else {
      this.result = 'Login Failed....';
    }
  }
  RedirectToRegistration()
  {
    const promise = this.router.navigate(['/reg']);
  }
}

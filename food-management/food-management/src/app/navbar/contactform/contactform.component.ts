import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.css']
})
export class ContactformComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    var x=sessionStorage.getItem("sessionId");
    if(x==null)
    {
      alert("not loogeed in");
      this.router.navigateByUrl('/login');
      return;
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

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

import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
@Component({
  selector: 'app-mcdonald',
  templateUrl: './mcdonald.component.html',
  styleUrls: ['./mcdonald.component.css']
})
export class McdonaldComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    var x=sessionStorage.getItem("sessionId");
    if(x==null)
    {
      alert("not loogeed in");
      this.router.navigateByUrl('/login');
      return;
    }
    $(document).ready(function(){
      $("#mySidenav").click().css("width","250px");
   });
  }
  home()
  {
    const promise = this.router.navigate(['./navbar']);
  }
  about()
  {
    const promise = this.router.navigate(['./abcd']);
  }
}


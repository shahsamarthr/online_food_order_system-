import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  

 Italian1=false;
   Italian()
   {
    this.chines1=false;
     this.SouthIndian1=false;
     this.Punjabi1=false;
     this.Italian1=true; 
   }
   Punjabi1=false;
   Punjabi()
   {
    this.chines1=false;
     this.SouthIndian1=false;
     this.Italian1=false;
    this.Punjabi1=true;
   }
   SouthIndian1=false;
   SouthIndian()
  {
    this.Italian1=false;
    this.Punjabi1=false;
    this.chines1=false;
    this.SouthIndian1=true;
    
  }
  chines1=false;
  chines()
  {
    this.Italian1=false;
    this.Punjabi1=false;
    this.SouthIndian1=false;
    this.chines1=true;
  }
  constructor(private router:Router) { }
    public logout(){
      sessionStorage.removeItem("sessionId");
      console.log("in here");
      this.router.navigateByUrl('/login');
    }
  

  ngOnInit() {
    var x=sessionStorage.getItem("sessionId");
    if(x==null)
    {
      alert("not loogeed in");
      this.router.navigateByUrl('/login');
      return;
    }
  
    var myIndex = 0;
carousel();

function carousel() 
{
    var i;
    var x = document.getElementsByClassName("myimg") as HTMLCollectionOf<HTMLElement>;
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 2000);    
}
    // function openNav() {
  //     document.getElementById("mySidenav").style.width = "250px";
//   }
  
  //  function closeNav() {
  //      document.getElementById("mySidenav").style.width = "0";
  //  }

      $(document).ready(function(){
         $("#mySidenav").click().css("width","250px");
      });
    
  //   $(document).ready(function(){
  //     // $(".closebtn").click().css("width","0px");
  //     // $("#mySidenav").bind('click',function(event){

  //     // });
     // $("#mySidenav").css("width","0");
     
      // $("#mySidenav").click().css("width","250px");

      // $(".closebtn").click().css("width","0px");

    //   $("#trial1").on("click",function(){
    //    // alert("hi");
    //     $(".sidenav").css("width","250px")
    //   });

    // });
  }
  
  about()
  {
    const promise = this.router.navigate(['./abcd']);
  }
  demo()
  {
    const promise = this.router.navigate(['./reg']);
  }
  dominos()
  {
    const promise = this.router.navigate(['./dominos']);
  }
  demo1()
  {
    const promise = this.router.navigate(['./contactus']);
  }
  mcdonald()
  {
    const promise = this.router.navigate(['./mcdonald']);
  }
  chinese()
  {
    const promise = this.router.navigate(['./chinese']);
  }
  punjabi()
  {
    const promise = this.router.navigate(['./punjabi']);
  }
  southindian()
  {
    const promise = this.router.navigate(['./southindian']);
  }

  }

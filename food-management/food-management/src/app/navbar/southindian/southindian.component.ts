import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-southindian',
  templateUrl: './southindian.component.html',
  styleUrls: ['./southindian.component.css']
})
export class SouthindianComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      $("#mySidenav").click().css("width","250px");
   });
  }

}

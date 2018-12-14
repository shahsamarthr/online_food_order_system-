import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-punjabi',
  templateUrl: './punjabi.component.html',
  styleUrls: ['./punjabi.component.css']
})
export class PunjabiComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      $("#mySidenav").click().css("width","250px");
   });
  }

}

import { Component,ElementRef } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'zomato';
  constructor(){
    
  }
 
  // ngAfterViewInit(){
  //   this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'red';
  //  this.elementRef.nativeElement.ownerDocument.body.style.blink = 'animation:blinkingText 0.8s infinite;';
//  }
}

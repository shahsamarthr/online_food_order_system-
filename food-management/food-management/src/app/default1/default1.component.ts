import { Component,ElementRef,OnInit } from '@angular/core';
@Component({
  selector: 'app-default1',
  templateUrl: './default1.component.html',
  styleUrls: ['./default1.component.css']
})
export class Default1Component implements OnInit {

  constructor(private elementRef: ElementRef){

  }
  ngOnInit() {
  }
  ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'red';
   this.elementRef.nativeElement.ownerDocument.body.style.blink = 'animation:blinkingText 0.8s infinite;';
 }
}

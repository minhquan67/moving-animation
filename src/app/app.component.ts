import { Component, HostListener, ElementRef } from '@angular/core';
import { moveToMouseClickPosition } from './animations/moving';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    moveToMouseClickPosition
  ]
})
export class AppComponent {
  pageX: string = '50%';
  pageY: string = '50%';
  speed: number = 0;
  state: boolean = false;
  
  @HostListener('document:click', ['$event'])
  onClick(e: MouseEvent) {
    if(!this.eRef.nativeElement.contains(e.target)) {
      this.pageX = e.offsetX+'px';
      this.pageY = e.offsetY+'px';
      this.state = !this.state;
    }
  }
  
  constructor(private eRef: ElementRef) { }
  
  speedChange() {
    this.speed = this.speed? this.speed : 0;
  }
}

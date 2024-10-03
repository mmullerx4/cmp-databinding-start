import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css',
  encapsulation: ViewEncapsulation.Emulated      //just this server-element. component will not show encapsulation identifier.   >ShadowDom
})
export class ServerElementComponent {
  @Input('srvElement') element: {type: string, name: string, content: string}; //srvElement is an alias for element

  constructor() {
    console.log('constructor called!');
  }

  ngOnInit() {
    console.log('ngOnInit called!');
  }

}

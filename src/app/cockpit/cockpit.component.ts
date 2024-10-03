import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core'; //these need to be called from Angular //do we need viewChild & ElementRef


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  // Emit an event when a server is created, passing serverName and serverContent.
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  // Emit an event with an alias "bpCreated"
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  //newServerName = '';
  //newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  constructor() {}

  ngOnInit() {

  } //lifecycle hook

  onAddServer(nameInput: HTMLInputElement) {
    console.log(this.serverContentInput)
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    }); //emit new event of this type ^ serverCreated
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    }); //emit new event of this type ^ serverCreated
  }

}



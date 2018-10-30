import { Component } from '@angular/core';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss']
})
export class ProjectsComponent {
  filter: string;
  constructor() {
    this.filter = 'any';
  }
  receiveMessage($event) {
    this.filter = $event;
  }

}

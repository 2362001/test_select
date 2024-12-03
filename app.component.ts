import { Component } from '@angular/core';
import { Project } from './project';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  projects:Project[];
  form: FormGroup;

  constructor() { 
    // Create sample projects
    this.projects = [
      new Project("Project 1"),
      new Project("Project 2")
    ]

    // Setup form
    this.form = new FormGroup({
      project: new FormControl(this.projects)      
    });
  }
}

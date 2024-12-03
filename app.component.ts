import { Component } from '@angular/core';
import { Project } from './project';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  projects: Project[];  // Mảng các dự án
  form: FormGroup;      // Mẫu FormGroup

  constructor() { 
    // Mảng ban đầu với các giá trị 'value' và 'label'
    const initialProjects = [
      { value: 1, label: "Project 1" },
      { value: 2, label: "Project 2" }
    ];

    // Map mảng ban đầu để chuyển thành mảng Project
    this.projects = initialProjects.map(project => new Project(project.value, project.label));

    // Thiết lập FormGroup, với control 'project'
    this.form = new FormGroup({
      project: new FormControl(this.projects.map(project => project.value)) // Lấy mảng 'value' để set vào control
    });
  }

  // Hàm submit để kiểm tra giá trị khi form được gửi
  onsubmit() {
    console.log(this.form.value); // In giá trị của form
  }
}
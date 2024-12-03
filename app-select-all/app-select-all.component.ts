import { Component, Input, OnChanges, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-app-select-all',
  templateUrl: './app-select-all.component.html',
  styleUrls: ['./app-select-all.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class AppSelectAllComponent {
  @Input() model: any;
  @Input() values: any[] = [];
  @Input() text = 'Select All'; 
  constructor(){

  }

  isChecked(): boolean {
    return this.model?.value && this.values.length
      && this.model?.value.length === this.values.length;
  }

  isIndeterminate(): boolean {
    return this.model?.value && this.values.length && this.model?.value.length
      && this.model?.value.length < this.values.length;
  }

  toggleSelection(change: any): void {
    if (change.checked) {
      this.model?.setValue(this.values);
    } else {
      this.model?.setValue([]);
    }
  }
}
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSelectAllComponent } from './app-select-all.component';

describe('AppSelectAllComponent', () => {
  let component: AppSelectAllComponent;
  let fixture: ComponentFixture<AppSelectAllComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppSelectAllComponent]
    });
    fixture = TestBed.createComponent(AppSelectAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

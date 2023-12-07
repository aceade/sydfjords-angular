import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColwdvatnComponent } from './colwdvatn.component';

describe('ColwdvatnComponent', () => {
  let component: ColwdvatnComponent;
  let fixture: ComponentFixture<ColwdvatnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColwdvatnComponent]
    });
    fixture = TestBed.createComponent(ColwdvatnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

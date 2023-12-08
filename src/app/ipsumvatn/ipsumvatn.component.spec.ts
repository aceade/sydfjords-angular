import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpsumvatnComponent } from './ipsumvatn.component';

describe('IpsumvatnComponent', () => {
  let component: IpsumvatnComponent;
  let fixture: ComponentFixture<IpsumvatnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IpsumvatnComponent]
    });
    fixture = TestBed.createComponent(IpsumvatnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

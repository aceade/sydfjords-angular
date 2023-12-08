import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoremvikComponent } from './loremvik.component';

describe('LoremvikComponent', () => {
  let component: LoremvikComponent;
  let fixture: ComponentFixture<LoremvikComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoremvikComponent]
    });
    fixture = TestBed.createComponent(LoremvikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

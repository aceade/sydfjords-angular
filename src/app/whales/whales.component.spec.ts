import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhalesComponent } from './whales.component';

describe('WhalesComponent', () => {
  let component: WhalesComponent;
  let fixture: ComponentFixture<WhalesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhalesComponent]
    });
    fixture = TestBed.createComponent(WhalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

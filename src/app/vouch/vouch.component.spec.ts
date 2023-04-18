import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VouchComponent } from './vouch.component';

describe('VouchComponent', () => {
  let component: VouchComponent;
  let fixture: ComponentFixture<VouchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VouchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VouchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlannetComponent } from './plannet.component';

describe('PlannetComponent', () => {
  let component: PlannetComponent;
  let fixture: ComponentFixture<PlannetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlannetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlannetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpLabComponent } from './exp-lab.component';

describe('ExpLabComponent', () => {
  let component: ExpLabComponent;
  let fixture: ComponentFixture<ExpLabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpLabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

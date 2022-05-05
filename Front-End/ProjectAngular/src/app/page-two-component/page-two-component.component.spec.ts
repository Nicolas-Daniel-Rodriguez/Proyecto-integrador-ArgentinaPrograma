import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTwoComponentComponent } from './page-two-component.component';

describe('PageTwoComponentComponent', () => {
  let component: PageTwoComponentComponent;
  let fixture: ComponentFixture<PageTwoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageTwoComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTwoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageOneComponentComponent } from './page-one-component.component';

describe('PageOneComponentComponent', () => {
  let component: PageOneComponentComponent;
  let fixture: ComponentFixture<PageOneComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageOneComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageOneComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

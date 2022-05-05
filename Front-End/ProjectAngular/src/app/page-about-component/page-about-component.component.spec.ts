import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAboutComponentComponent } from './page-about-component.component';

describe('PageAboutComponentComponent', () => {
  let component: PageAboutComponentComponent;
  let fixture: ComponentFixture<PageAboutComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAboutComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAboutComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewShortUrlComponent } from './view-short-url.component';

describe('ViewShortUrlComponent', () => {
  let component: ViewShortUrlComponent;
  let fixture: ComponentFixture<ViewShortUrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewShortUrlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewShortUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

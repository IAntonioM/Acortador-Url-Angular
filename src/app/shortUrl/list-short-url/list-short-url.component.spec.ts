import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListShortUrlComponent } from './list-short-url.component';

describe('ListShortUrlComponent', () => {
  let component: ListShortUrlComponent;
  let fixture: ComponentFixture<ListShortUrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListShortUrlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListShortUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

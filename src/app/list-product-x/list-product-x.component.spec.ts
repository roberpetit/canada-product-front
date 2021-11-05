import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductXComponent } from './list-product-x.component';

describe('ListProductXComponent', () => {
  let component: ListProductXComponent;
  let fixture: ComponentFixture<ListProductXComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProductXComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProductXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

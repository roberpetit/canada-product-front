import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProductXComponent } from './new-product-x.component';

describe('NewProductXComponent', () => {
  let component: NewProductXComponent;
  let fixture: ComponentFixture<NewProductXComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewProductXComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProductXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

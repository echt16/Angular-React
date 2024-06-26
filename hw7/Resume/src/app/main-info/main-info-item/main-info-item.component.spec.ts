import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainInfoItemComponent } from './main-info-item.component';

describe('MainInfoItemComponent', () => {
  let component: MainInfoItemComponent;
  let fixture: ComponentFixture<MainInfoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainInfoItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainInfoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

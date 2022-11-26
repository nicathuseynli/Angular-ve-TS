import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondTaskbuttonclickComponent } from './second-taskbuttonclick.component';

describe('SecondTaskbuttonclickComponent', () => {
  let component: SecondTaskbuttonclickComponent;
  let fixture: ComponentFixture<SecondTaskbuttonclickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondTaskbuttonclickComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondTaskbuttonclickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

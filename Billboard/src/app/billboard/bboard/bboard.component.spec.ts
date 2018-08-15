import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BboardComponent } from './bboard.component';

describe('BboardComponent', () => {
  let component: BboardComponent;
  let fixture: ComponentFixture<BboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BboardListComponent } from './bboard-list.component';

describe('BboardListComponent', () => {
  let component: BboardListComponent;
  let fixture: ComponentFixture<BboardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BboardListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BboardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

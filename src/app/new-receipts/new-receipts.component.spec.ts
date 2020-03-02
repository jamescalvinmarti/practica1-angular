import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewReceiptsComponent } from './new-receipts.component';

describe('NewReceiptsComponent', () => {
  let component: NewReceiptsComponent;
  let fixture: ComponentFixture<NewReceiptsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewReceiptsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewReceiptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

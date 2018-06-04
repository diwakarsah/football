import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformaceComponent } from './performace.component';

describe('PerformaceComponent', () => {
  let component: PerformaceComponent;
  let fixture: ComponentFixture<PerformaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerformaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLeagueComponent } from './list-league.component';

describe('ListLeagueComponent', () => {
  let component: ListLeagueComponent;
  let fixture: ComponentFixture<ListLeagueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLeagueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLeagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

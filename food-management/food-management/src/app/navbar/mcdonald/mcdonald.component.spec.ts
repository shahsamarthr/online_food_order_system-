import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { McdonaldComponent } from './mcdonald.component';

describe('McdonaldComponent', () => {
  let component: McdonaldComponent;
  let fixture: ComponentFixture<McdonaldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ McdonaldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(McdonaldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

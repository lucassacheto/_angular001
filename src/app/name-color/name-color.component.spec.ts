import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NameColorComponent } from './name-color.component';

describe('NameColorComponent', () => {
  let component: NameColorComponent;
  let fixture: ComponentFixture<NameColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NameColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NameColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

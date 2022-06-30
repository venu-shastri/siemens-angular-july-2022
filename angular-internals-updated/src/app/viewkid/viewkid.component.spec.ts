import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewkidComponent } from './viewkid.component';

describe('ViewkidComponent', () => {
  let component: ViewkidComponent;
  let fixture: ComponentFixture<ViewkidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewkidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewkidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

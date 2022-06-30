import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentkidComponent } from './contentkid.component';

describe('ContentkidComponent', () => {
  let component: ContentkidComponent;
  let fixture: ComponentFixture<ContentkidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentkidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentkidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

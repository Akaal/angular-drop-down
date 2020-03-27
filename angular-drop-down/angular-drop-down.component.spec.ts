import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';

import { AngularDropDownComponent } from './angular-drop-down.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

describe('HeadercommonjumptocomponentComponent', () => {
  let component: AngularDropDownComponent;
  let fixture: ComponentFixture<AngularDropDownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularDropDownComponent ],
      imports: [
        CommonModule,
        PerfectScrollbarModule,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

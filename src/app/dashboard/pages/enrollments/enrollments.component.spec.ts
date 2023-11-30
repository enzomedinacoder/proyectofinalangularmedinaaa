import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollmentsComponent } from './enrollments.component';
import { EnrollmentsTableComponent } from './components/enrollments-table/enrollments-table.component';
import { EnrollmentsRoutingModule } from './enrollments-routing.module';

describe('EnrollmentsComponent', () => {
  let component: EnrollmentsComponent;
  let fixture: ComponentFixture<EnrollmentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnrollmentsComponent,EnrollmentsTableComponent],
      imports:[EnrollmentsRoutingModule]
    });
    fixture = TestBed.createComponent(EnrollmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

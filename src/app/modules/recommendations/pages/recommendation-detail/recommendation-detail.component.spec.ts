import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendationDetailComponent } from './recommendation-detail.component';

describe('RecommendationDetailComponent', () => {
  let component: RecommendationDetailComponent;
  let fixture: ComponentFixture<RecommendationDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecommendationDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecommendationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisternowComponent } from './registernow.component';

describe('RegisternowComponent', () => {
  let component: RegisternowComponent;
  let fixture: ComponentFixture<RegisternowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisternowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisternowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

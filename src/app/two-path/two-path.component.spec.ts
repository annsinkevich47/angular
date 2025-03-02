import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoPathComponent } from './two-path.component';

describe('TwoPathComponent', () => {
  let component: TwoPathComponent;
  let fixture: ComponentFixture<TwoPathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwoPathComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoPathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubesearchComponent } from './youtubesearch.component';

describe('YoutubesearchComponent', () => {
  let component: YoutubesearchComponent;
  let fixture: ComponentFixture<YoutubesearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YoutubesearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YoutubesearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

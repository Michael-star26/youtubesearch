import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchresultsComponent } from './searchresults.component';

describe('SearchresultsComponent', () => {
  let component: SearchresultsComponent;
  let fixture: ComponentFixture<SearchresultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchresultsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchresultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

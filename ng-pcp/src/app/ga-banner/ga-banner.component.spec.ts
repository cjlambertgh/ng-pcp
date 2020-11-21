import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaBannerComponent } from './ga-banner.component';

describe('GaBannerComponent', () => {
  let component: GaBannerComponent;
  let fixture: ComponentFixture<GaBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GaBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

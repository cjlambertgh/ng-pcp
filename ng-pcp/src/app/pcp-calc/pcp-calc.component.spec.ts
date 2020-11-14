import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcpCalcComponent } from './pcp-calc.component';

describe('PcpCalcComponent', () => {
  let component: PcpCalcComponent;
  let fixture: ComponentFixture<PcpCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PcpCalcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PcpCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

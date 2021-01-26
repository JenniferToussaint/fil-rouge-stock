import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockModifComponent } from './stock-modif.component';

describe('StockModifComponent', () => {
  let component: StockModifComponent;
  let fixture: ComponentFixture<StockModifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockModifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockModifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

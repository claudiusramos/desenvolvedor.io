import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UmcomponenteComponent } from './umcomponente.component';

describe('UmcomponenteComponent', () => {
  let component: UmcomponenteComponent;
  let fixture: ComponentFixture<UmcomponenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UmcomponenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UmcomponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

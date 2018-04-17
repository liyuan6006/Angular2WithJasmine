import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputeComponentComponent } from './compute-component.component';

describe('ComputeComponentComponent', () => {
  let component: ComputeComponentComponent;
  let fixture: ComponentFixture<ComputeComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComputeComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  //test
  it('should return 0 if input is negtive',()=>{
    let component = new ComputeComponentComponent();
     expect(component.compute(-1)).toBe(0);
  })
});

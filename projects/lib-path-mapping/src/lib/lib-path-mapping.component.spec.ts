import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibPathMappingComponent } from './lib-path-mapping.component';

describe('LibPathMappingComponent', () => {
  let component: LibPathMappingComponent;
  let fixture: ComponentFixture<LibPathMappingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibPathMappingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibPathMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { NgModule } from '@angular/core';
import { LibPathMappingComponent } from './lib-path-mapping.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';



@NgModule({
  declarations: [LibPathMappingComponent, Comp1Component, Comp2Component],
  imports: [
  ],
  exports: [LibPathMappingComponent]
})
export class LibPathMappingModule { }

import { PainelComponent } from './painel.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ PainelComponent ],
  exports: [ PainelComponent ]
})
export class PainelModule {}

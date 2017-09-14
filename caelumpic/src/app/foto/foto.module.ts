import { NgModule } from '@angular/core';

import { FotoComponent } from './foto.component';
import { FotoDescricaoComponent } from './foto-descricao/foto-descricao.component';

@NgModule({
  declarations: [
    FotoComponent,
    FotoDescricaoComponent
  ],
  exports: [
    FotoComponent
  ]
})
export class FotoModule {}

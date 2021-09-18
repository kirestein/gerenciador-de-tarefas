import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefaConcluidaDirective } from './tarefa-concluida.directive';



@NgModule({
  declarations: [
    TarefaConcluidaDirective
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }

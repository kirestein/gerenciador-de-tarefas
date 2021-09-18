
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefaService, TarefaConcluidaDirective } from './shared';
import { ListarTarefaComponent } from './listar-tarefa';
import { FormsModule } from '@angular/forms';
import { CadastrarTarefasComponent } from './cadastrar-tarefas';
import { EditarTarefaComponent } from './editar-tarefa';



@NgModule({
  declarations: [
    ListarTarefaComponent,
    CadastrarTarefasComponent,
    EditarTarefaComponent,
    TarefaConcluidaDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    TarefaService
  ]
})
export class TarefasModule { }

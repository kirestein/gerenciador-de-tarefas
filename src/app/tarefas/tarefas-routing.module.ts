import { Routes } from "@angular/router";;
import { ListarTarefaComponent } from "./listar-tarefa";
import { CadastrarTarefasComponent } from "./cadastrar-tarefas";
import { EditarTarefaComponent } from "./editar-tarefa";

export const TarefaRoutes: Routes = [
  {
    path: 'tarefas',
    redirectTo: 'tarefas/listar-tarefa'
  },
  {
    path: 'tarefas/listar-tarefa',
    component: ListarTarefaComponent
  },
  {
    path: 'tarefas/cadastrar-tarefas',
    component: CadastrarTarefasComponent
  },
  {
    path: 'tarefas/editar-tarefa/:id',
    component: EditarTarefaComponent
  }
]

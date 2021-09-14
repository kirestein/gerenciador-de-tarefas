import { Routes } from "@angular/router";;
import { ListarTarefaComponent } from "./listar-tarefa";
import { CadastrarTarefasComponent } from "./cadastrar-tarefas";

export const TarefaRoutes: Routes = [
  {
    path: 'tarefas',
    redirectTo: 'tarefas/listas-tarefa'
  },
  {
    path: 'tarefas/listar-tarefa',
    component: ListarTarefaComponent
  },
  {
    path: 'tarefas/cadastrar-tarefas',
    component: CadastrarTarefasComponent
  }
]

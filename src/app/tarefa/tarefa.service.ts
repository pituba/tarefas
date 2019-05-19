import { Injectable } from '@angular/core';
import { Tarefa } from './tarefa.model';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  listaTarefas: Tarefa[] = []
  tarefas:Tarefa[] = [];
  tarefa: Tarefa;

  ObterTarefas(){
     let aux = window.localStorage.getItem("dbTarefa");
     this.tarefas = JSON.parse(aux);
     return this.tarefas;
  }

  RemoverTarefa(tarefa: Tarefa) {
    var index = this.tarefas.indexOf(tarefa);
    if (index > -1) {
      this.tarefas.splice(index, 1);
    }
    localStorage.setItem("dbTarefa", JSON.stringify(this.tarefas))
    return this.tarefas;
  }

  public EditarTarerfa(tarafaNew: Tarefa, tarefa: any){
    let auxLista = JSON.parse(localStorage.getItem("dbTarefa"));
        auxLista[tarefa.id].nome = tarafaNew.nome
        auxLista[tarefa.id].descricao = tarafaNew.descricao
        auxLista[tarefa.id].agendado = tarafaNew.agendado
        auxLista[tarefa.id].maquina = tarafaNew.maquina
        localStorage.setItem("dbTarefa", JSON.stringify(auxLista));
  }

  public CadastrarTarefa(tarefa: Tarefa){
    let auxList = window.localStorage.getItem("dbTarefa");

    if(auxList != null && auxList != ""){
      this.listaTarefas = JSON.parse(auxList);
    }
    tarefa.id = this.listaTarefas.length == 0 ? this.tarefas.length : this.tarefas.length + 1
    this.listaTarefas.push(tarefa);
    window.localStorage.setItem("dbTarefa", JSON.stringify(this.listaTarefas));
  }
}


import { Injectable } from '@angular/core';
import { Tarefa } from './tarefa.model';
import { forEach } from '@angular/router/src/utils/collection';

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

  public EditarTarerfa(tarafaNew: Tarefa){
    let auxLista = JSON.parse(localStorage.getItem("dbTarefa"));

   auxLista.forEach(function(value){
      if(value.id == tarafaNew.id ){
        value.nome = tarafaNew.nome
        value.descricao = tarafaNew.descricao
        value.agendado = tarafaNew.agendado
        value.maquina = tarafaNew.maquina
      }
   })
        localStorage.setItem("dbTarefa", JSON.stringify(auxLista));
  }

  public CadastrarTarefa(tarefa: Tarefa){
    let auxList = window.localStorage.getItem("dbTarefa");

    if(auxList != null && auxList != ""){
      this.listaTarefas = JSON.parse(auxList);
    }
    tarefa.id = Math.floor(Math.random() * 1000);  
    this.listaTarefas.push(tarefa);
    window.localStorage.setItem("dbTarefa", JSON.stringify(this.listaTarefas));
  }
}


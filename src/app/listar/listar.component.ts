import { Component, OnInit, Input } from '@angular/core';
import { TarefaService } from '../tarefa/tarefa.service';
import { Tarefa } from '../tarefa/tarefa.model';
import { EditarComponent} from '../editar/editar.component';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {
  displayedColumns: string[] = ['nome', 'descricao', 'agendado', 'maquina', 'editar'];
  
 tarefas: Tarefa[] = [];
 tarefa: Tarefa;
 @Input() editar: boolean;
 constructor(private service: TarefaService) { }

  ngOnInit() {
  this.tarefas = this.service.ObterTarefas();
  }

  RemoverTarefa(tarefa: Tarefa){
    var index = this.tarefas.indexOf(tarefa);
    if (index > -1) {
      this.tarefas.splice(index, 1);
    }
    this.service.RemoverTarefa(tarefa);    
  }

  EditarTarefa(tarefa : Tarefa){
    this.tarefa = tarefa;
    this.editar = true;
  }
}

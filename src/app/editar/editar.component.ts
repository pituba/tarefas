import { Component, OnInit, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { TarefaService } from '../tarefa/tarefa.service';
import { Tarefa } from '../tarefa/tarefa.model';
import { __importDefault } from 'tslib';
import { EventEmitter } from 'events';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {

 tarefas: any[];
 tarefaOld: any;
 form1: FormGroup;
 tarefa:any;
 @Output() respostaTarefa = new EventEmitter();

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar, private sevEdit : TarefaService, private route: ActivatedRoute) {
    this.route.params.subscribe(res => this.tarefa = res);
    this.route.params.subscribe(res => this.tarefaOld = res);
   }

  ngOnInit() {
    this.form1 = this.fb.group({
      id: this.tarefa.id,
      nome: this.tarefa.nome,
      descricao: this.tarefa.descricao,
      agendado: this.tarefa.agendado,
      maquina: this.tarefa.maquina
    });
  }

  EditarTarefa(tarefa: Tarefa){
    this.sevEdit.EditarTarerfa(tarefa,this.tarefaOld);
  }
  
  Cancelar(){
    window.history.back();
  }
}

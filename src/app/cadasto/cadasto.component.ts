import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { TarefaService } from '../tarefa/tarefa.service';
import { Tarefa } from '../tarefa/tarefa.model';

@Component({
  selector: 'app-cadasto',
  templateUrl: './cadasto.component.html',
  styleUrls: ['./cadasto.component.scss']
})
export class CadastoComponent implements OnInit {

tarefas: any[];
 form: FormGroup;
 tarefa:Tarefa;

  constructor(private fb: FormBuilder, private service: TarefaService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.form = this.fb.group({
      nome: '',
      descricao: '',
      agendado: false,
      maquina: false
    })
  }

  CadastraTarefa(tarefa: Tarefa){
   this.service.CadastrarTarefa(tarefa);
   this.form.reset();
   this.openSnackBar("Cadastro realizado!")
  }

  Limpar(){
   this.form.reset();
  }

  openSnackBar(msg: string) {
    this.snackBar.open(msg, 'OK', {
      duration: 2000
    });
  }
}

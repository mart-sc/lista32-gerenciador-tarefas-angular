import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css']
})
export class TarefaComponent implements OnInit {
  listaTarefas : any[] = []

  constructor() { }

  ngOnInit(): void {
    this.listaTarefas = [
      {id: 0, nome: 'Tomar banho', concluida: false},
      {id: 1, nome: 'Escovar os dentes', concluida: true},
      {id: 2, nome: 'Arrumar a cama', concluida: false}
    ]
  }

  adicionar(nomeTarefa : string) {
    if(nomeTarefa.trim().length <= 0) {
      alert("Campo não pode estar vazio!")
      return
    }

    if(nomeTarefa.length >= 35) {
      alert("O nome é grande demais!")
      return;
    }

    const tarefaEncontrada = this.listaTarefas.find(item => item.nome.toLowerCase() == nomeTarefa.toLowerCase())
    if(tarefaEncontrada) {
      alert("Essa tarefa já está registrada.")
      return
    }

    this.listaTarefas.push({id: this.listaTarefas.length, nome: nomeTarefa, concluida: false}) 
  }

  deletar(id: number) {
    this.listaTarefas = this.listaTarefas.filter(item => (item.id != id))
  }

  completar(id: number) {
    const tarefaEncontrada = this.listaTarefas.find(item => (item.id == id))

    if (tarefaEncontrada) {
      tarefaEncontrada.concluida = !tarefaEncontrada.concluida;
    }
  }
}

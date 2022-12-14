import { FaseService } from './../../shared/service/fase.service';
import { ProximaFaseService } from './../../shared/service/proxima-fase.service';
import { Jogador } from './../../shared/models/jogador.model';
import { JogadorService } from './../../shared/service/jogador.service';
import { EmbaralharListaService } from './../../shared/service/embaralha-lista.service';
import { Puzzle } from '../shared/model/puzzle.model';
import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-bio-fase1',
  templateUrl: './bio-fase1.component.html',
  styleUrls: ['./bio-fase1.component.css','../shared/style.css']
})
export class BioFase1Component implements OnInit {

  public puzzles: Puzzle[] = [
    {imagem:'./../../../assets/bio/1/puzzle-1.png', posicaoCorreta: 0},
    {imagem:'./../../../assets/bio/1/puzzle-2.png', posicaoCorreta: 1},
    {imagem:'./../../../assets/bio/1/puzzle-3.png', posicaoCorreta: 2}];
  public acertou: boolean[] = [false, false, false];
  public todosCorretos: boolean;
  public jogador: Jogador = new Jogador();
  public proximoDesativado: boolean = true;
  public ativarDialog: boolean = false;
  public idFaseAtual: number = 10;

  constructor(
    private embaralhaListaService: EmbaralharListaService,
    private jogadorService: JogadorService,
    private proximaFaseService: ProximaFaseService,
    private faseService: FaseService) {}

  ngOnInit(): void {
    this.jogadorService.getJogadorAtivo().subscribe(jogadores => this.jogador = jogadores[0]);
    while(this.verificaPosicaoInicialArray()) {
      this.embaralhaListaService.embaralhaLista(this.puzzles);
    }
  }

  public drop(event: CdkDragDrop<Puzzle[]>): void {
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    this.verificaPosicaoCorretaArray();  
    this.verificaAcertos();
    if(this.todosCorretos) { 
      this.jogador.pontuacao += 100;
      this.proximoDesativado = false;
      this.ativarDialog = true;
    }
  }

  public verificaPosicaoInicialArray(): boolean {
    for(let i=0; i< this.puzzles.length; i++){
      if(this.puzzles[i].posicaoCorreta !== i)
      { return false; }
    }
    return true;
  }

  public verificaPosicaoCorretaArray(): void {
    for(let i=0; i< this.puzzles.length; i++){
      if(this.puzzles[i].posicaoCorreta === i)
      { this.acertou[i] = true; }
    }
  }

  public verificaAcertos(): void {
    this.todosCorretos = true;
    for(let i=0; i< this.puzzles.length; i++){
      if(!this.acertou[i]) {
        this.todosCorretos = false;
      }
    }
  }

  public proximaFase(): void {
    this.proximaFaseService.proximaFaseMesmoTema(this.jogador, this.idFaseAtual);
  }

}
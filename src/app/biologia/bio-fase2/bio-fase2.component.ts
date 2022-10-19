import { FaseService } from './../../shared/service/fase.service';
import { ProximaFaseService } from './../../shared/service/proxima-fase.service';
import { EmbaralharListaService } from './../../shared/service/embaralha-lista.service';
import { JogadorService } from './../../shared/service/jogador.service';
import { Jogador } from 'src/app/shared/models/jogador.model';
import { Component, OnInit } from '@angular/core';
import { Puzzle } from '../shared/model/puzzle.model';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-bio-fase2',
  templateUrl: './bio-fase2.component.html',
  styleUrls: ['./bio-fase2.component.css','../shared/style.css']
})
export class BioFase2Component implements OnInit {

  public puzzles: Puzzle[] = [
    {imagem:'./../../../assets/bio/2/puzzle-1.png', posicaoCorreta: 0},
    {imagem:'./../../../assets/bio/2/puzzle-2.png', posicaoCorreta: 1},
    {imagem:'./../../../assets/bio/2/puzzle-3.png', posicaoCorreta: 2},
    {imagem:'./../../../assets/bio/2/puzzle-4.png', posicaoCorreta: 3},
    {imagem:'./../../../assets/bio/2/puzzle-5.png', posicaoCorreta: 4}];
  public acertou: boolean[] = [false, false, false, false, false, false];
  public todosCorretos: boolean = false;
  public jogador: Jogador = new Jogador();
  public proximoDesativado: boolean = true;
  public ativarDialog: boolean = false;
  public idFaseAtual: number = 11;

  constructor(
    private jogadorService: JogadorService,
    private embaralharListaService: EmbaralharListaService,
    private proximaFaseService: ProximaFaseService,
    private faseService: FaseService) { }

  ngOnInit() {
    this.jogadorService.getJogadorAtivo().subscribe(jogador => this.jogador = jogador[0]);
    while(this.verificaPosicaoInicialArray()) {
      this.embaralharListaService.embaralhaLista(this.puzzles);
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
      if(this.puzzles[i].posicaoCorreta !== i) { 
        return false; 
      }
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

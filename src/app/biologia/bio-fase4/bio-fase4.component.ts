import { Drop } from './../shared/model/drop.model';
import { EmbaralharListaService } from './../../shared/service/embaralha-lista.service';
import { Puzzle } from './../shared/model/puzzle.model';
import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-bio-fase4',
  templateUrl: './bio-fase4.component.html',
  styleUrls: ['./bio-fase4.component.css', '../shared/style.css']
})
export class BioFase4Component implements OnInit {

  public corpoHumano: string = '../../../assets/bio/4/corpo.png';
  public partesDoCorpo: Puzzle[] = [ 
    { imagem: '../../../assets/bio/4/1.png', posicaoCorreta: 0 },
    { imagem: '../../../assets/bio/4/2.png', posicaoCorreta: 1 },
    { imagem: '../../../assets/bio/4/3.png', posicaoCorreta: 2 },
    { imagem: '../../../assets/bio/4/4.png', posicaoCorreta: 3 },
    { imagem: '../../../assets/bio/4/5.png', posicaoCorreta: 4 },
    { imagem: '../../../assets/bio/4/6.png', posicaoCorreta: 5 },
    { imagem: '../../../assets/bio/4/7.png', posicaoCorreta: 6 },
    { imagem: '../../../assets/bio/4/8.png', posicaoCorreta: 7 },
    { imagem: '../../../assets/bio/4/9.png', posicaoCorreta: 8 },
    { imagem: '../../../assets/bio/4/10.png', posicaoCorreta: 9 }
  ];
  public listaDrop: Drop[] = [];
  public x: string[] = ['30px','387px'];
  public y: string[] = ['2px','92px','180px','270px','360px'];

  constructor(private embaralhaListaService: EmbaralharListaService) { }

  ngOnInit() {
    this.carregarDrops();
  }
  
  public carregarDrops() {
    this.embaralhaListaService.embaralhaLista(this.partesDoCorpo);
    this.listaDrop = [
      { posicao: 0, posicaoX: this.x[0], posicaoY: this.y[0], puzzleList: []},
      { posicao: 1, posicaoX: this.x[1], posicaoY: this.y[0], puzzleList: []},
      { posicao: 2, posicaoX: this.x[0], posicaoY: this.y[1], puzzleList: []},
      { posicao: 3, posicaoX: this.x[1], posicaoY: this.y[1], puzzleList: []},
      { posicao: 4, posicaoX: this.x[0], posicaoY: this.y[2], puzzleList: []},
      { posicao: 5, posicaoX: this.x[1], posicaoY: this.y[2], puzzleList: []},
      { posicao: 6, posicaoX: this.x[0], posicaoY: this.y[3], puzzleList: []},
      { posicao: 7, posicaoX: this.x[1], posicaoY: this.y[3], puzzleList: []},
      { posicao: 8, posicaoX: this.x[0], posicaoY: this.y[4], puzzleList: []},
      { posicao: 9, posicaoX: this.x[1], posicaoY: this.y[4], puzzleList: []}
    ];
  }

  public drop(event: CdkDragDrop<Puzzle[]>) {
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex,
    );
  }

  public dropResposta(event: CdkDragDrop<Puzzle[]>, drop: Drop) {
    if(drop.puzzleList.length > 0) {
      return;
    }
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex,
    );
  }

}

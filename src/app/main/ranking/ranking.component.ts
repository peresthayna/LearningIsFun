import { TextToSpeechService } from './../../shared/service/text-to-speech.service';
import { JogadorService } from './../../shared/service/jogador.service';
import { Component, OnInit } from '@angular/core';
import { Jogador } from 'src/app/shared/models/jogador.model';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {

  public jogadores: Jogador[] = [];

  constructor(
    private jogadorService: JogadorService,
    private textToSpeechService: TextToSpeechService) { }

  ngOnInit(): void {
    this.jogadorService.getJogadores()
    .subscribe(jogador => {
        this.jogadores = jogador;
        this.jogadores = this.jogadores.sort((a, b) => a.pontuacao > b.pontuacao ? 1 : (a.pontuacao === b.pontuacao ? 0 : -1)).reverse();
        let index: number = 1;
        this.jogadores.forEach(jogador => {
        if(index > 0 && index < 4) {
          jogador.colocacao = "fas fa-trophy";
          if(index === 1) {
            jogador.cor = 'text-warning';
          } else if(index === 2) {
            jogador.cor = 'text-secondary';
          } else {
            jogador.cor = 'text-danger';
          }
        } else {
          jogador.colocacao = index.toString();
        }
        index++;
        })
    })
    this.textToSpeechService.textToSpeech();
  }

  public start(n: number): void {
    if(n == 999) {
      this.textToSpeechService.start('Ranking');
    } else {
      if(n == 0) {
        this.textToSpeechService.start('numero 1' + this.jogadores[0].nome + this.jogadores[0].pontuacao + 'pontos');
      } else if(n == 1) {
        this.textToSpeechService.start('numero 2' + this.jogadores[1].nome + this.jogadores[1].pontuacao + 'pontos')
      } else if(n == 2) {
        this.textToSpeechService.start('numero 3' + this.jogadores[2].nome + this.jogadores[2].pontuacao + 'pontos')
      } else
        this.textToSpeechService.start('numero ' + this.jogadores[n].colocacao + this.jogadores[n].nome + this.jogadores[n].pontuacao + 'pontos');
    }
  }
}
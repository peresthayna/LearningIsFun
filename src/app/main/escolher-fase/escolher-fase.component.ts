import { JogadorService } from 'src/app/shared/service/jogador.service';
import { Jogador } from 'src/app/shared/models/jogador.model';
import { TextToSpeechService } from './../../shared/service/text-to-speech.service';
import { FaseService } from './../../shared/service/fase.service';
import { TemaService } from './../../shared/service/tema.service';
import { Fase } from 'src/app/shared/models/fase.model';
import { Component, OnInit } from '@angular/core';
import { Tema } from 'src/app/shared/models/tema.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-escolher-fase',
  templateUrl: './escolher-fase.component.html',
  styleUrls: ['./escolher-fase.component.css']
})
export class EscolherFaseComponent implements OnInit {

  public tema: Tema = new Tema();
  public fases: Fase[] = [];
  public jogador: Jogador = new Jogador();

  constructor(
    private route: ActivatedRoute, 
    private temaService: TemaService,
    private faseService: FaseService,
    private textToSpeechService: TextToSpeechService,
    private jogadorService: JogadorService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = params['id'];
      this.temaService.getTemas().subscribe((tema => tema.filter(t => t.id == id ? this.tema = t : null)))
      this.jogadorService.getJogadorAtivo().subscribe(j => this.fases = this.faseService.getFasesTema(id, j[0]));
    });
      this.textToSpeechService.textToSpeech();
  }
  
  public start(n: number): void {
    switch (n) {
      case 1:
        this.textToSpeechService.start('Escolha uma fase');
        break;
      case 10:
        this.textToSpeechService.start('Quebra cabeça');
        break;
      case 11:
        this.textToSpeechService.start('Quebra cabeça 2');
        break;
      case 12:
        this.textToSpeechService.start('Quantidades');
        break;
      case 13:
        this.textToSpeechService.start('Identificar');
        break;
      case 14:
        this.textToSpeechService.start('Objetos');
        break;
      case 20:
        this.textToSpeechService.start('Árvore Alfabeto');
        break;
      case 21:
        this.textToSpeechService.start('Palavras');
        break;
      case 22:
        this.textToSpeechService.start('AEIOU');
        break;
      case 23:
        this.textToSpeechService.start('Iniciais');
        break;
      case 24:
        this.textToSpeechService.start('Sílabas');
        break;
      case 30:
        this.textToSpeechService.start('Corações');
        break;
      case 31:
        this.textToSpeechService.start('Formas');
        break;
      case 32:
        this.textToSpeechService.start('Dominós');
        break;
      case 33:
        this.textToSpeechService.start('Docinhos');
        break;
      case 34:
        this.textToSpeechService.start('Dados');
        break;
    default: 
        // 
        break;
    }
  }
}

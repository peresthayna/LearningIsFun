import { TextToSpeechService } from './../../shared/service/text-to-speech.service';
import { FaseService } from './../../shared/service/fase.service';
import { TemaService } from './../../shared/service/tema.service';
import { Component, OnInit } from '@angular/core';
import { Tema } from 'src/app/shared/models/tema.model';

@Component({
  selector: 'app-escolher-tema',
  templateUrl: './escolher-tema.component.html',
  styleUrls: ['./escolher-tema.component.css']
})
export class EscolherTemaComponent implements OnInit {

  public temas: Tema[] = [];

  constructor(
    private temaService: TemaService,
    private faseService: FaseService,
    private textToSpeechService: TextToSpeechService) { }

  ngOnInit(): void {
    this.faseService.getFases();
    this.temaService.getTemas().subscribe(
      t => this.temas = t,
      () => console.log('Erro ao recuperar temas')
    );
    this.textToSpeechService.textToSpeech();
  }
  
  public start(n: number): void {
    if(n == 1) {
      this.textToSpeechService.start('Corpo Humano');
    } else if (n == 2) {
      this.textToSpeechService.start('Linguagens');
    } else {
      this.textToSpeechService.start('Matemática');
    }
  }
  
}

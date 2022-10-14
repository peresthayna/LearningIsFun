import { TextToSpeechService } from './../service/text-to-speech.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-botao-tema',
  templateUrl: './botao-tema.component.html',
  styleUrls: ['./botao-tema.component.css']
})
export class BotaoTemaComponent implements OnInit {

  constructor(private textToSpeechService: TextToSpeechService) { }

  ngOnInit() {
    this.textToSpeechService.textToSpeech();
  }

  public start() {
    this.textToSpeechService.start('Escolher Tema');
  }

}

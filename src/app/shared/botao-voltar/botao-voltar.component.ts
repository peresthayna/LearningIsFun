import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { TextToSpeechService } from '../service/text-to-speech.service';

@Component({
  selector: 'app-botao-voltar',
  templateUrl: './botao-voltar.component.html',
  styleUrls: ['./botao-voltar.component.css']
})
export class BotaoVoltarComponent implements OnInit {

  constructor(private textToSpeechService: TextToSpeechService) { }

  ngOnInit(): void {
    this.textToSpeechService.textToSpeech();
  }

  public start() {
    this.textToSpeechService.start('Voltar');
  }

  public voltar(): void {
    window.history.back();
  }

}

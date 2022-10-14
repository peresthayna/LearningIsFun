import { TextToSpeechService } from './../service/text-to-speech.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-botao-home',
  templateUrl: './botao-home.component.html',
  styleUrls: ['./botao-home.component.css']
})
export class BotaoHomeComponent implements OnInit {

  constructor(private textToSpeechService: TextToSpeechService) { }

  ngOnInit(): void {
    this.textToSpeechService.textToSpeech();
  }

  public start() {
    this.textToSpeechService.start('Página inicial');
  }

}

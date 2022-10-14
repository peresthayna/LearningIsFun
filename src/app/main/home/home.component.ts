import { Component, OnInit } from '@angular/core';
import Speech from 'speak-tts';
import { TextToSpeechService } from 'src/app/shared/service/text-to-speech.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(private textToSpeechService: TextToSpeechService) { }

  ngOnInit(): void {
    this.textToSpeechService.textToSpeech();
  }
  
  public start(n: number): void {
    if(n == 1) {
      this.textToSpeechService.start('Selecionar Jogador');
    } else if (n == 2) {
      this.textToSpeechService.start('Criar Jogador');
    } else {
      this.textToSpeechService.start('Ranking');
    }
  }

}

import { TextToSpeechService } from './../service/text-to-speech.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-botao-proximo',
  templateUrl: './botao-proximo.component.html',
  styleUrls: ['./botao-proximo.component.css']
})
export class BotaoProximoComponent implements OnInit {

  @Input() public isDesativado: boolean = true;

  constructor(private textToSpeechService: TextToSpeechService) { }

  ngOnInit(): void {
    this.textToSpeechService.textToSpeech();
  }

  public start() {
    this.textToSpeechService.start('Próxima Fase');
  }

}

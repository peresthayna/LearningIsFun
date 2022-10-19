import { Jogador } from 'src/app/shared/models/jogador.model';
import { Component, Input, OnInit } from '@angular/core';
import { TextToSpeechService } from '../service/text-to-speech.service';

@Component({
  selector: 'app-botao-dica',
  templateUrl: './botao-dica.component.html',
  styleUrls: ['./botao-dica.component.css']
})
export class BotaoDicaComponent implements OnInit {

  public displayDialog: boolean = false;
  @Input() jogador: Jogador = new Jogador();

  constructor(private textToSpeechService: TextToSpeechService) { }

  ngOnInit(): void {
    this.textToSpeechService.textToSpeech();
  }

  public start(n: number): void {
    if(n == 0) {
      this.textToSpeechService.start('Dica');
    } else {
      this.textToSpeechService.start('Deseja comprar uma dica por 50 moedas?');
    }
  }

  public dica(): void {
    this.displayDialog = true;
  }

  public fecharDica(): void {
    this.displayDialog = false;
  }

  public comprarDica(): void {
    
  }

}

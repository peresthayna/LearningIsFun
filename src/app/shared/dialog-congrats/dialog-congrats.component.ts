import { TextToSpeechService } from './../service/text-to-speech.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-congrats',
  templateUrl: './dialog-congrats.component.html',
  styleUrls: ['./dialog-congrats.component.css']
})
export class DialogCongratsComponent implements OnInit {

  @Input() public ativarDialog: boolean = false;

  constructor(private textToSpeechService: TextToSpeechService) { }

  ngOnInit() {
    this.textToSpeechService.textToSpeech();
  }

  public start(): void {
    this.textToSpeechService.start('PARABÉNS!');
  }

}

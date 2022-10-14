import { Injectable } from '@angular/core';
import Speech from 'speak-tts';

@Injectable({
  providedIn: 'root'
})
export class TextToSpeechService {

  public speech: any;
  public result = '';
  public speechData: any;

  constructor() { }

  public textToSpeech() {
    this.speech = new Speech();
    if(this.speech.hasBrowserSupport()) {
      this.speech.init({
        'volume': 1,
        'lang': 'pt-BR',
        'rate': 1,
        'pitch': 1,
        'voice':'Google português do Brasil',
        'splitSentences': true,
        'listeners': {
          'onvoiceschanged': (voices) => {
            console.log("Event voiceschanged", voices)
          }
        }
      }).then((data) => {
        console.log("Speech is ready, voices are available", data)
        this.speechData = data;
        data.voices.forEach(voice => {
          console.log(voice.name + " "+ voice.lang)
        });
      }).catch(e => {
        console.error("An error occured while initializing : ", e)
      })
    }
  }

  public start(msg: string): void {
    this.speech.speak({text: msg})
  }
}

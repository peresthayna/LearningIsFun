import { TextToSpeechService } from './../../shared/service/text-to-speech.service';
import { FaseService } from './../../shared/service/fase.service';
import { Router } from '@angular/router';
import { Jogador } from './../../shared/models/jogador.model';
import { Component, OnInit } from '@angular/core';
import { JogadorService } from 'src/app/shared/service/jogador.service';

@Component({
  selector: 'app-selecionar-jogador',
  templateUrl: './selecionar-jogador.component.html',
  styleUrls: ['./selecionar-jogador.component.css']
})
export class SelecionarJogadorComponent implements OnInit {

  public jogadores: Jogador[] = [];

  constructor(
    private jogadorService: JogadorService,
    private faseService: FaseService,
    private router: Router,
    private textToSpeechService: TextToSpeechService) { }

  ngOnInit(): void {
    this.carregarJogadores();
    this.textToSpeechService.textToSpeech();
  }
  
  public start(n: number): void {
    if(n == 0) {
      this.textToSpeechService.start('Selecione um Jogador');
    } else {
      this.textToSpeechService.start(this.jogadores[n-1].nome);
    }
  }

  public carregarJogadores() {
    this.jogadorService.getJogadores()
      .subscribe(jogadores => this.jogadores = jogadores);
  }

  public selecionarJogador(jogadorSelecionado: Jogador) {
    this.jogadores.forEach((jogador: Jogador) => {
      if (jogador.id != jogadorSelecionado.id) {
        jogador.ativo = false;
      } else {
        jogador.ativo = true;
      }
    });
    this.salvarJogadores(this.jogadores);
  }

  public salvarJogadores(jogadores: Jogador[]) {
    if(jogadores.length === 0) {
      this.router.navigate(['/escolherTema']);
      return;
    }
    let jogador = jogadores.shift();
    this.jogadorService.atualizarJogador(jogador).subscribe(
      () => {
        const jogadoresSeguintes = jogadores.filter(j => j.id !== jogador.id);
        this.salvarJogadores(jogadoresSeguintes);
        },
      () => console.log('Erro ao atualizar status do jogador')
    );
  }

}

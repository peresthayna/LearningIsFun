import { TextToSpeechService } from './../../shared/service/text-to-speech.service';
import { FaseService } from './../../shared/service/fase.service';
import { JogadorService } from '../../shared/service/jogador.service';
import { Jogador } from './../../shared/models/jogador.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fase } from 'src/app/shared/models/fase.model';

@Component({
  selector: 'app-criar-cadastro',
  templateUrl: './criar-cadastro.component.html',
  styleUrls: ['./criar-cadastro.component.css']
})
export class CriarCadastroComponent implements OnInit {

  public avatares: string[] = [];
  public inputNome: string;
  public jogador: Jogador = new Jogador;
  public desabilitarBotao: boolean = true;
  public modoProgressao: boolean = false;
  public displayAjuda: boolean = false;

  constructor(
    private jogadorService: JogadorService,
    private faseService: FaseService,
    private router: Router,
    private textToSpeechService: TextToSpeechService
    ) { }

  ngOnInit(): void {
    this.carregarAvatares();
    this.textToSpeechService.textToSpeech();
  }
  
  public start(n: number): void {
    switch (n) {
      case 0:
        this.textToSpeechService.start('Clique no microfone e diga seu nome');
        break;
      case 1:
        this.textToSpeechService.start('Jogar com desafio de níveis bloqueados');
        break;
      case 2: 
        this.textToSpeechService.start('Ajuda');
        break;
      case 3: 
        this.textToSpeechService.start('Nome');
        break;
      case 4: 
        this.textToSpeechService.start('O modo progressão desbloqueia os níveis só quando você passa para a próxima fase. Para jogar com todos os níveis desbloqueados não marque essa opção.');
        break;
    }
  }

  private carregarAvatares(): void {
    for(let i=0; i<8; i++) {
      this.avatares[i] = '/assets/avatares/avatar-' + (i+1) + '.png'; 
    }
  }

  public verificarNome(): boolean {
    if(this.inputNome && this.inputNome!=='') {
      return true;
    }
    return false;
  }

  public selectModoProgressao() {
    this.modoProgressao = !this.modoProgressao;
  }

  public verificarCampos(avatar: string): void {
    if(this.verificarNome()) {
      this.jogador.nome = this.inputNome;
      this.jogador.avatar = avatar;
      console.log(this.modoProgressao)
      this.jogador.modoProgressao = this.modoProgressao;
      this.jogador.faseAtual = new Fase();
      this.jogador.faseAtual.id = 1;
      this.jogador.faseAtual.idTema = 1;
      this.desabilitarBotao = false;
    }
  }

  public criarJogador() {
    this.jogadorService.criarJogador(this.jogador)
    .subscribe(
      () => this.router.navigate(['/escolherTema']),
      () => alert('Erro ao criar jogador!')
    )
    this.faseService.getFases();
  }

  public displayDialog() {
    this.displayAjuda = !this.displayAjuda;
  }


}
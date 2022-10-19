import { JogadorService } from './jogador.service';
import { Jogador } from './../models/jogador.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProximaFaseService {

  constructor(private jogadorService: JogadorService) { }

  public proximaFaseMesmoTema(jogador: Jogador, idFaseAtual: number): void {
    jogador.faseAtual.id = (idFaseAtual + 1);
    jogador.moedas += 100;
    this.jogadorService.atualizarJogador(jogador).subscribe(() => {})
    
  }

  public proximaFaseOutroTema(jogador: Jogador, idFaseAtual: number, idTemaAtual: number): void {
    jogador.faseAtual.idTema = (idTemaAtual + 1); 
    jogador.moedas += 500;
    this.proximaFaseMesmoTema(jogador, idFaseAtual);
  }
}

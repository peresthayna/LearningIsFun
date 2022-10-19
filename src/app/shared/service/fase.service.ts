import { JogadorService } from 'src/app/shared/service/jogador.service';
import { Fase } from './../models/fase.model';
import { Injectable } from '@angular/core';
import { Jogador } from '../models/jogador.model';

@Injectable({
  providedIn: 'root'
})
export class FaseService {

  public fases: Fase[] = [];

  constructor() { }

  public getFases(jogador: Jogador): Fase[] {
    let index = 0; 
    for(let tema=1; tema<4; tema++) {
      for(let fase=0; fase<5; fase++) {
        this.fases[index] = new Fase();
        this.fases[index].id = +(tema.toString() + fase);
        this.fases[index].idTema = tema;
        this.fases[index].classe = 'coluna-' + this.fases[index].id;
        if(jogador.modoProgressao) {
          if(jogador.faseAtual.id >= (index + (tema * 10))) {
            this.fases[index].imagem = '/assets/fases/' + this.fases[index].id + '.png';
            this.fases[index].bloqueada = false;
          } else {
            this.fases[index].imagem = '/assets/fases/locked.png';
            this.fases[index].bloqueada = true;
          }
        } else {
          this.fases[index].imagem = '/assets/fases/' + this.fases[index].id + '.png';
          this.fases[index].bloqueada = false;
        }
        index++;
      }
    }
    this.fases[0].titulo = 'Quebra-cabeça';
    this.fases[0].nome = 'Vamos montar o quebra-cabeça';
    this.fases[0].descricao = 'Arrastar as peças na ordem correta';
    this.fases[0].dificuldade = 'Fácil';
    this.fases[0].rota = 'bio-fase-1';
    this.fases[1].titulo = '2º Quebra-cabeça';
    this.fases[1].nome = 'Vamos montar o quebra-cabeça';
    this.fases[1].descricao = 'Arrastar as peças na ordem correta';
    this.fases[1].dificuldade = 'Fácil';
    this.fases[1].rota = 'bio-fase-2';
    this.fases[2].titulo = 'Quantidades';
    this.fases[2].nome = 'Vamos marcar quantos temos';
    this.fases[2].descricao = 'Clicar nos quadrados para representar a quantidade';
    this.fases[2].dificuldade = 'Fácil';
    this.fases[2].rota = 'bio-fase-3';
    this.fases[3].titulo = 'Identificar';
    this.fases[3].nome = 'Vamos identificar as partes do corpo';
    this.fases[3].descricao = 'Arrastar as partes para a posição correta';
    this.fases[3].dificuldade = 'Médio';
    this.fases[3].rota = 'bio-fase-4';
    this.fases[4].titulo = 'Objetos';
    this.fases[4].nome = 'Vamos relacionar os objetos ao corpo';
    this.fases[4].descricao = 'Arrastar as partes para a posição correta.';
    this.fases[4].dificuldade = 'Médio';
    this.fases[5].titulo = 'Árvore alfabeto';
    this.fases[5].nome = 'Vamos colocar as maçãs na árvore';
    this.fases[5].descricao = 'Arrastar as letras para completar o alfabeto';
    this.fases[5].dificuldade = 'Fácil';
    this.fases[6].titulo = 'Palavras';
    this.fases[6].nome = 'Vamos completar as palavras';
    this.fases[6].descricao = 'Clicar na letra que está faltando';
    this.fases[6].dificuldade = 'Fácil';
    this.fases[7].titulo = 'AEIOU';
    this.fases[7].nome = 'Vamos jogar com AEIOU';
    this.fases[7].descricao = 'Arrastar as vogais faltando nas palavras';
    this.fases[7].dificuldade = 'Médio';
    this.fases[8].titulo = 'Iniciais';
    this.fases[8].nome = 'Vamos brincar com as iniciais';
    this.fases[8].descricao = 'Arrastar as figuras até sua letra inicial.';
    this.fases[8].dificuldade = 'Médio';
    this.fases[9].titulo = 'Sílabas';
    this.fases[9].nome = 'Vamos jogar com as sílabas malucas';
    this.fases[9].descricao = 'Arrastar as sílabas para seus lugares';
    this.fases[9].dificuldade = 'Difícil';
    this.fases[10].titulo = 'Corações';
    this.fases[10].nome = 'Vamos contar corações';
    this.fases[10].descricao = 'Clicar na quantidade certa de corações';
    this.fases[10].dificuldade = 'Fácil';
    this.fases[11].titulo = 'Formas';
    this.fases[11].nome = 'Vamos contar as formas';
    this.fases[11].descricao = 'Arrastar as formas até sua quantidade';
    this.fases[11].dificuldade = 'Médio';
    this.fases[12].titulo = 'Dominós';
    this.fases[12].nome = 'Vamos completar os dominós';
    this.fases[12].descricao = 'Arrastar o número que falta para ser igual ao casco da tartaruga';
    this.fases[13].dificuldade = 'Difícil';
    this.fases[13].titulo = 'Docinhos';
    this.fases[13].nome = 'Vamos somar os docinhos';
    this.fases[13].descricao = 'Arrastar o número da resposta para completar a soma';
    this.fases[13].dificuldade = 'Difícil';
    this.fases[14].titulo = 'Dados';
    this.fases[14].nome = 'Vamos somar os dados';
    this.fases[14].descricao = 'Arrastar os dados para completar a soma';
    this.fases[14].dificuldade = 'Difícil';
    
    return this.fases;
  }
  
  public getFasesTema(idTema: number, jogador: Jogador): Fase[] {
    let fases: Fase[] = [];
    this.getFases(jogador).forEach(f => {
      if(f.idTema == idTema) {
        fases.push(f);
      }
    })
    return fases;
  }
}

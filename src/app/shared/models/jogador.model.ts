import { Fase } from './fase.model';

export class Jogador {
  id: number;
  nome: string;
  avatar: string;
  pontuacao: number;
  moedas: number;
  colocacao: string;
  medalha: string;
  faseAtual: Fase;
  cor: string;
  ativo: boolean;
  modoProgressao: boolean;

  constructor() {
    this.id = 0;
    this.nome = '';
    this.avatar = '';
    this.pontuacao = 0;
    this.moedas = 0;
    this.colocacao = '';
    this.medalha = '';
    this.ativo = true;
    this.modoProgressao = false;
  }
}
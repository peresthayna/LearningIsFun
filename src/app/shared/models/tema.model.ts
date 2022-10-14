import { Fase } from "./fase.model";

export class Tema {
  id: number;
  descricao: string;
  dificuldade: string;
  fases: number;
  imagem: string;
  rota: string;
  cor: string;

  constructor() {
    this.id = 0;
    this.descricao = '';
    this.dificuldade = '';
    this.fases = 5;
    this.imagem = '';
    this.rota = '';
  }
}
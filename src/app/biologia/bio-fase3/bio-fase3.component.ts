import { Jogador } from './../../shared/models/jogador.model';
import { FaseService } from './../../shared/service/fase.service';
import { ProximaFaseService } from './../../shared/service/proxima-fase.service';
import { ParteDoCorpo } from './model/parte-do-corpo.model';
import { Component, OnInit } from '@angular/core';
import { JogadorService } from 'src/app/shared/service/jogador.service';

@Component({
  selector: 'app-bio-fase3',
  templateUrl: './bio-fase3.component.html',
  styleUrls: ['./bio-fase3.component.css', '../shared/style.css']
})
export class BioFase3Component implements OnInit {

  public partesDoCorpo: ParteDoCorpo[] = [
    { id: 0, imagem: '../../../assets/bio/3/olho.png', quantidade: 2, checkbox: [false, false] },
    { id: 1, imagem: '../../../assets/bio/3/mão.png', quantidade: 2, checkbox: [false, false] },
    { id: 2, imagem: '../../../assets/bio/3/boca.png', quantidade: 1, checkbox: [false, false] },
    { id: 3, imagem: '../../../assets/bio/3/pé.png', quantidade: 2, checkbox: [false, false] },
    { id: 4, imagem: '../../../assets/bio/3/orelha.png', quantidade: 2, checkbox: [false, false] },
    { id: 5, imagem: '../../../assets/bio/3/nariz.png', quantidade: 1, checkbox: [false, false] }
  ];
  public acertou: boolean[] = [false, false, false, false, false, false];
  public acertouTudo: boolean = false;
  public auxiliar: boolean;
  public displayDialog: boolean = false;
  public jogador: Jogador = new Jogador();
  public idFaseAtual: number = 12;

  constructor(
    private proximaFaseService: ProximaFaseService,
    private jogadorService: JogadorService,
  ) { }

  ngOnInit() {
    this.jogadorService.getJogadorAtivo().subscribe(j => this.jogador = j[0]);
  }

  public mudouValor(parte: ParteDoCorpo) {
    if(parte.id == 0 || parte.id == 1 || parte.id == 3 || parte.id == 4) {
      parte.checkbox[0] ? this.auxiliar = true : this.auxiliar = false;
      parte.checkbox[1] ? this.auxiliar = true : this.auxiliar = false;
      if(this.auxiliar) {
        this.acertou[parte.id] = true;
      } else {
        this.acertou[parte.id] = false;
      }
    } else {
      parte.checkbox[0] ? this.auxiliar = true : this.auxiliar = false;
      parte.checkbox[1] ? this.auxiliar = false : this.auxiliar = true;
      if(this.auxiliar) {
        this.acertou[parte.id] = true;
      } else {
        this.acertou[parte.id] = false;
      }
    }
    if(this.acertou[0] && this.acertou[1] && this.acertou[2] && this.acertou[3] && this.acertou[4] && this.acertou[5]) {
      this.acertouTudo = true;
      this.displayDialog = true;
      this.jogador.pontuacao += 100;
    } else {
      this.acertouTudo = false;
      this.displayDialog = false;
    }
  }

  public proximaFase(): void {
    this.proximaFaseService.proximaFaseMesmoTema(this.jogador, this.idFaseAtual);
  }

}

import { JogadorService } from './../service/jogador.service';
import { Jogador } from 'src/app/shared/models/jogador.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-jogador',
  templateUrl: './perfil-jogador.component.html',
  styleUrls: ['./perfil-jogador.component.css']
})
export class PerfilJogadorComponent implements OnInit {

  public jogador: Jogador = new Jogador();
  @Input() set podeRecarregar(recarregar: boolean) {
    this.recarregar();
  }

  constructor(private jogadorService: JogadorService) { }

  ngOnInit(): void {
    this.carregarRequisicao();
  }
  
  public recarregar() {
    this.carregarRequisicao();
  }
  
  public carregarRequisicao() {
    this.jogadorService.getJogadorAtivo().subscribe(jogador => this.jogador = jogador[0]);
  }

}

import { BioFase1Component } from './biologia/bio-fase1/bio-fase1.component';
import { EscolherFaseComponent } from './main/escolher-fase/escolher-fase.component';
import { SelecionarJogadorComponent } from './main/selecionar-jogador/selecionar-jogador.component';
import { EscolherTemaComponent } from './main/escolher-tema/escolher-tema.component';
import { CriarCadastroComponent } from './main/criar-cadastro/criar-cadastro.component';
import { RankingComponent } from './main/ranking/ranking.component';
import { HomeComponent } from './main/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ranking', component: RankingComponent },
  { path: 'criarCadastro', component: CriarCadastroComponent },
  { path: 'escolherTema', component: EscolherTemaComponent },
  { path: 'escolherFase/:id', component: EscolherFaseComponent },
  { path: 'selecionarJogador', component: SelecionarJogadorComponent },
  { path: 'escolherFase/1/bio-fase-1', component: BioFase1Component },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
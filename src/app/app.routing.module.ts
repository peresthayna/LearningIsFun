import { BioFase4Component } from './biologia/bio-fase4/bio-fase4.component';
import { BioFase3Component } from './biologia/bio-fase3/bio-fase3.component';
import { BioFase2Component } from './biologia/bio-fase2/bio-fase2.component';
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
  { path: 'escolherFase/1/bio-fase-2', component: BioFase2Component },
  { path: 'escolherFase/1/bio-fase-3', component: BioFase3Component },
  { path: 'escolherFase/1/bio-fase-4', component: BioFase4Component },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
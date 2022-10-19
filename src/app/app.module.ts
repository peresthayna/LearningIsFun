import { DialogModule } from 'primeng/dialog';
import { RankingComponent } from './main/ranking/ranking.component';
import { HomeComponent } from './main/home/home.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CriarCadastroComponent } from './main/criar-cadastro/criar-cadastro.component';
import { EscolherTemaComponent } from './main/escolher-tema/escolher-tema.component';
import { BotaoHomeComponent } from './shared/botao-home/botao-home.component';
import { BotaoProximoComponent } from './shared/botao-proximo/botao-proximo.component';
import { PerfilJogadorComponent } from './shared/perfil-jogador/perfil-jogador.component';
import { SelecionarJogadorComponent } from './main/selecionar-jogador/selecionar-jogador.component';
import { EscolherFaseComponent } from './main/escolher-fase/escolher-fase.component';
import { BotaoTemaComponent } from './shared/botao-tema/botao-tema.component';
import { BioFase1Component } from './biologia/bio-fase1/bio-fase1.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DialogCongratsComponent } from './shared/dialog-congrats/dialog-congrats.component';
import { BioFase2Component } from './biologia/bio-fase2/bio-fase2.component';
import { BotaoDicaComponent } from './shared/botao-dica/botao-dica.component';
import { BotaoVoltarComponent } from './shared/botao-voltar/botao-voltar.component';
import { BioFase3Component } from './biologia/bio-fase3/bio-fase3.component';
import { BioFase4Component } from './biologia/bio-fase4/bio-fase4.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RankingComponent,
    CriarCadastroComponent,
    EscolherTemaComponent,
    BotaoHomeComponent,
    BotaoProximoComponent,
    PerfilJogadorComponent,
    SelecionarJogadorComponent,
    EscolherFaseComponent,
    BotaoTemaComponent,
    BioFase1Component,
    DialogCongratsComponent,
    BioFase2Component,
    BotaoDicaComponent,
    BotaoVoltarComponent,
    BioFase3Component,
    BioFase4Component,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DialogModule,
    DragDropModule
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
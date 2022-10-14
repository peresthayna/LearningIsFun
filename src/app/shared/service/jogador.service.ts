import { filter, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Jogador } from '../models/jogador.model';

@Injectable({
  providedIn: 'root'
})
export class JogadorService {

  private readonly URL: string = 'http://localhost:3000/jogador';

  constructor(private http: HttpClient) { }

  public getJogadores(): Observable<Jogador[]> {
    return this.http.get<Jogador[]>(this.URL);
  }

  public getJogadorAtivo(): Observable<Jogador[]> {
    return this.getJogadores().pipe(map(jogadores => jogadores.filter(jogador => jogador.ativo)));
  }

  public criarJogador(jogador: Jogador) {
    return this.http.post(this.URL, jogador);
  }

  public atualizarJogador(jogador: Jogador) {
    return this.http.put(this.URL + '/' + jogador.id, jogador);
  }

  public atualizarJogadores(jogadores: Jogador[]) {
    const ids: string = jogadores.map(jogador => jogador.id).join(',');
    const jogador = {"jogador": jogadores}
    return this.http.put(this.URL + '/' + ids, jogador);
  }
  
}

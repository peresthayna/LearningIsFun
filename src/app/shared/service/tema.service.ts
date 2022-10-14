import { Tema } from 'src/app/shared/models/tema.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  private readonly URL: string = 'http://localhost:3000/tema';

  constructor(private http: HttpClient) { }

  public getTemas(): Observable<Tema[]> {
    return this.http.get<Tema[]>(this.URL);
  }
}

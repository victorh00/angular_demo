import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Anotacao } from '../anotacao';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  /* endpoint gerado ao iniciar o json=server */
  private readonly API = 'http://localhost:3000/anotacoes';

  /* injeção da dependência http do tipo HttpClient torna o objeto http e seus métodos disponíveis nesta classe */
  constructor(private http: HttpClient) {}

  /**
   * Faz requisição GET para o endpoint.
   * @return `Observable` de lista de anotações <Anotacao[]>.
   */
  read(): Observable<Anotacao[]> {
    return this.http.get<Anotacao[]>(this.API);
  }
}

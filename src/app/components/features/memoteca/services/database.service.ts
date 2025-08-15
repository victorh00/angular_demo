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
   * @returns `Observable` de lista de anotações <Anotacao[]>.
   */
  buscarTodos(): Observable<Anotacao[]> {
    return this.http.get<Anotacao[]>(this.API);
  }

  buscarPorID(id: number): Observable<Anotacao> {
    return this.http.get<Anotacao>(`${this.API}/${id}`)
  }

  /**
   * Faz requisição POST para o endpoint.
   * @param anotacao, da interface `Anotacao`.
   * @returns `Observable` de <Anotacao>.
   */
  criar(anotacao: Anotacao): Observable<Anotacao> {
    return this.http.post<Anotacao>(this.API, anotacao);
  }

  editar(anotacao: Anotacao): Observable<Anotacao> {
    const url = `${this.API}/${anotacao.id}`;
    return this.http.put<Anotacao>(url, anotacao);
  }

  deletar(id: number): Observable<Anotacao> {
    const url = `${this.API}/${id}`;
    return this.http.delete<Anotacao>(url);
  }
}

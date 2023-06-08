import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Encuesta} from '../models/encuesta';

@Injectable({
  providedIn: 'root'
})
export class EventosService {
  constructor(public http: HttpClient) {
  }

  /**
   * Obtiene la lista de eventos de alguna categoría.
   */
  getListaEventos(categoriaId: number) {
    const params = {
      'categoria_id': `${categoriaId}`
    };

    return this.http
      .get(`${environment.apiUrl}/eventos/lista`,
        {params: params});
  }

  /**
   * Obtiene la lista de eventos de alguna categoría y fecha.
   */
  getListaEventosPorFecha(categoriaId: number, fecha: string) {
    const params = {
      'categoria_id': `${categoriaId}`,
      'fecha': `${fecha}`
    };

    return this.http
      .get(`${environment.apiUrl}/eventos/lista`,
        {params: params});
  }

  /**
   * Realiza la encuesta para un evento.
   *
   * @param encuesta Instancia de la encuesta de opinión realizada.
   */
  calificarEvento(encuesta: Encuesta) {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const options = {
      headers: httpHeaders
    };

    return this.http
      .post<Encuesta>(`${environment.apiUrl}/eventos/calificar`,
        encuesta, options);
  }
}

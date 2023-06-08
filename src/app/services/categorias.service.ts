import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  constructor(public http: HttpClient) {
  }

  /**
   * Obtiene la lista de categorías o subcategorías.
   */
  getListaCategorias(categoriaPadreId: number = -1) {
    const params = {};

    if (categoriaPadreId !== -1) {
      params['categoria_padre_id'] = `${categoriaPadreId}`;
    }

    return this.http
      .get(`${environment.apiUrl}/categorias/lista`,
        {params: params});
  }
}

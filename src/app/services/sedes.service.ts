import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SedesService {

  constructor(public http: HttpClient) {
  }

  /**
   * Obtiene los detalles de una sede por medio de su categoría asociada.
   */
  getDetalleSede(categoriaId: number) {
    const params = {'categoria_id': `${categoriaId}`};

    return this.http
      .get(`${environment.apiUrl}/sedes/detalle`,
        {params: params});
  }
}

import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  constructor() {
  }

  /**
   * Obtiene la clase css para el fondo de pantalla dependiendo del id de la
   * categoría.
   *
   * @param categoriaId Id de la categoría.
   */
  getBgClassCategoria(categoriaId: number): string {
    let bgClass = '';

    switch (categoriaId) {
      case 1:
        bgClass = 'background-flyer-darkgreen';
        break;
      case 2:
        bgClass = 'background-flyer-greenblue';
        break;
      case 3:
        bgClass = 'background-flyer-red';
        break;
      case 4:
        bgClass = 'background-flyer-darkgreen';
        break;
      case 5:
        bgClass = 'background-flyer-greenblue';
        break;
      case 6:
        bgClass = 'background-flyer-red';
        break;
      case 7:
        bgClass = 'background-flyer-darkgreen';
        break;
      default:
        bgClass = 'background-flyer-blue';
    }

    return bgClass;
  }

  /**
   * Obtiene las clases de colores para los botones dependiendo de la clase css
   * de la pantalla en donde se colocarán.
   *
   * @param screenBgClass Clase css del fondo de pantalla.
   */
  getBgClassesBtn(screenBgClass: string) {
    let btnClasses = [];

    switch (screenBgClass) {
      case 'background-flyer-blue':
        btnClasses = ['greenblue', 'red', 'darkgreen'];
        break;
      case 'background-flyer-darkgreen':
        btnClasses = ['greenblue', 'red', 'blue'];
        break;
      case 'background-flyer-greenblue':
        btnClasses = ['red', 'blue', 'darkgreen'];
        break;
      case 'background-flyer-red':
        btnClasses = ['greenblue', 'darkgreen', 'blue'];
        break;
    }

    return btnClasses;
  }
}

import {Injectable} from '@angular/core';
import {LoadingController} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private loaderDimissed: boolean;

  constructor(private loadingController: LoadingController) {
    this.loaderDimissed = false;
  }

  /**
   * Muestra un loader hasta que se indique explícitamente que se oculte.
   */
  showLoader() {
    const loader = this.loadingController.create({
      message: 'Cargando...'
    }).then((res) => {
      res.present();

      res.onDidDismiss().then((dis) => {
        this.loaderDimissed = true;
      });
    });
  }

  /**
   * Cierra el loader.
   */
  hideLoader() {
    console.log('Cerrando el loader...');
    this.loadingController.dismiss();

    setTimeout(() => {
      if (!this.loaderDimissed) {
        console.log('Upss, a intentar de nuevo cerrar el loader...');
        this.hideLoader();
      } else {
        console.log('Yeii, ya se cerró el loader.');
      }
    }, 500);
  }
}

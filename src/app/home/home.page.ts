import {Component, OnInit} from '@angular/core';
import {ModalController, NavController, Platform, PopoverController} from '@ionic/angular';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {CategoriasService} from '../services/categorias.service';
import {Categoria} from '../models/categoria';
import {LoaderService} from '../services/loader.service';
import {EncuestaComponent} from '../components/encuesta/encuesta.component';
import {ColorService} from '../services/color.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  /**
   * TODO: Refactorizar seteo de estilos de la toolbar.
   */

  categorias: Categoria[];
  imagesLoaded: number;
  cardMeasure: number;
  btnColors: string[];
  categoriaBgClass: string;

  constructor(public navCtrl: NavController,
              public platform: Platform,
              private statusBar: StatusBar,
              private categoriasService: CategoriasService,
              private loader: LoaderService,
              private colorService: ColorService) {
  }

  ngOnInit() {
    this.imagesLoaded = 0;
    this.categoriaBgClass = 'background-flyer-blue';
    this.btnColors = this.colorService.getBgClassesBtn(this.categoriaBgClass);

    this.platform.ready().then((readySource) => {
      this.cardMeasure = this.platform.width() / 2;
    });

    this.loader.showLoader();
    this.getListaCategorias();

    const staticThis = this;

    setTimeout(function () {
      staticThis.statusBar.styleBlackOpaque();
      staticThis.statusBar.backgroundColorByHexString('#072424');
    }, 300);
  }

  /**
   * Llama al servicio de categorías para obtener la lista de categorías
   * generales.
   */
  getListaCategorias() {
    return this.categoriasService.getListaCategorias(-1)
      .subscribe((response) => {
        this.categorias = response as Categoria[];

        setTimeout(() => {
          this.loader.hideLoader();
        }, 1000);
      });
  }

  /**
   * Callback ejecutado cuando la imagen de una sede se carga.
   *
   * @param categoriaId Id de la sede cargada.
   */
  imageLoaded(categoriaId: number) {
    this.imagesLoaded++;
  }

}

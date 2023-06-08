import {Component, OnInit} from '@angular/core';
import {Categoria} from '../models/categoria';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {ActivatedRoute} from '@angular/router';
import {CategoriasService} from '../services/categorias.service';
import {LoaderService} from '../services/loader.service';
import {ColorService} from '../services/color.service';

@Component({
  selector: 'app-seleccion-categoria',
  templateUrl: './seleccion-categoria.page.html',
  styleUrls: ['./seleccion-categoria.page.scss'],
})
export class SeleccionCategoriaPage implements OnInit {
  categoriaId: number;
  categorias: Categoria[];
  tituloPagina: string;
  size: number;
  btnColors: string[];
  categoriaBgClass: string;

  constructor(private statusBar: StatusBar,
              private route: ActivatedRoute,
              private categoriasService: CategoriasService,
              private loader: LoaderService,
              private colorService: ColorService) {
  }

  ngOnInit() {
    this.loader.showLoader();
    this.statusBar.styleBlackOpaque();
    this.statusBar.backgroundColorByHexString('#072424');
    this.categoriaId = parseInt(this.route.snapshot.paramMap.get('categoriaId'), 10);
    this.tituloPagina = this.route.snapshot.paramMap.get('tituloPagina');
    this.categoriaBgClass = this.colorService.getBgClassCategoria(this.categoriaId);
    this.btnColors = this.colorService.getBgClassesBtn(this.categoriaBgClass);

    if (this.tituloPagina.toLowerCase() === 'eventos adicionales') {
      this.size = 12;
    } else {
      this.size = 6;
    }

    console.log(this.tituloPagina);
    this.getListaCategorias();
  }

  /**
   * Llama al servicio de categorías para obtener la lista de sedes.
   */
  getListaCategorias() {
    return this.categoriasService.getListaCategorias(this.categoriaId)
      .subscribe((response) => {
        this.categorias = response as Categoria[];

        setTimeout(() => {
          this.loader.hideLoader();
        }, 1000);
      });
  }

}

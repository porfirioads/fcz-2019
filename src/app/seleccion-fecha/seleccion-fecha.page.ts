import {Component, OnInit} from '@angular/core';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {ActivatedRoute} from '@angular/router';
import {ColorService} from '../services/color.service';

@Component({
  selector: 'app-seleccion-fecha',
  templateUrl: './seleccion-fecha.page.html',
  styleUrls: ['./seleccion-fecha.page.scss'],
})
export class SeleccionFechaPage implements OnInit {
  diasValidos = {
    vaciosIniciales: ['', '', '', '', ''],
    diasFila1: [13, 14],
    diasFila2: [15, 16, 17, 18, 19, 20, 21],
    diasFila3: [22, 23, 24, 25, 26, 27],
    nombresDias: ['L', 'M', 'M', 'J', 'V', 'S', 'D'],
    vaciosFinales: ['']
  };

  categoriaId: number;
  categoriaBgClass: string;
  btnColors: string[];

  constructor(private statusBar: StatusBar,
              private route: ActivatedRoute,
              private colorService: ColorService) {
  }

  ngOnInit() {
    this.categoriaId = parseInt(this.route.snapshot.paramMap.get('categoriaId'), 10);
    this.categoriaBgClass = this.colorService.getBgClassCategoria(this.categoriaId);
    this.btnColors = this.colorService.getBgClassesBtn(this.categoriaBgClass);
    this.statusBar.styleBlackOpaque();
    this.statusBar.backgroundColorByHexString('#072424');

    console.log(`La categoría de los eventos por fecha es: ${this.categoriaId}`);
  }

}

import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LoaderService} from '../services/loader.service';
import {StatusBar} from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-desfile-descripcion',
  templateUrl: './desfile-descripcion.page.html',
  styleUrls: ['./desfile-descripcion.page.scss'],
})
export class DesfileDescripcionPage implements OnInit {
  tituloPagina: string;

  slideOpts = {
    effect: 'flip'
  };

  constructor(private route: ActivatedRoute,
              private statusBar: StatusBar) {
  }

  ngOnInit() {
    this.statusBar.styleBlackOpaque();
    this.statusBar.backgroundColorByHexString('#072424');
    this.tituloPagina = this.route.snapshot.paramMap.get('tituloPagina');
  }

}

import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {StatusBar} from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-pulque-descripcion',
  templateUrl: './pulque-descripcion.page.html',
  styleUrls: ['./pulque-descripcion.page.scss'],
})
export class PulqueDescripcionPage implements OnInit {
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

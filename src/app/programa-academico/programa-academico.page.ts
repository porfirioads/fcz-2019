import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-programa-academico',
  templateUrl: './programa-academico.page.html',
  styleUrls: ['./programa-academico.page.scss'],
})
export class ProgramaAcademicoPage implements OnInit {
  tituloPagina: string;

  paginasProgramaAcademico: string[] = [
    '../../assets/img/programa-academico/programa_academico_01.jpg',
    '../../assets/img/programa-academico/programa_academico_02.jpg',
    '../../assets/img/programa-academico/programa_academico_03.jpg',
    '../../assets/img/programa-academico/programa_academico_04.jpg',
    '../../assets/img/programa-academico/programa_academico_05.jpg',
    '../../assets/img/programa-academico/programa_academico_06.jpg',
    '../../assets/img/programa-academico/programa_academico_07.jpg',
    '../../assets/img/programa-academico/programa_academico_08.jpg',
    '../../assets/img/programa-academico/programa_academico_09.jpg',
    '../../assets/img/programa-academico/programa_academico_10.jpg',
    '../../assets/img/programa-academico/programa_academico_11.jpg'
  ];

  paginaDefault = '../../assets/img/programa-academico/programa_academico_default.jpg';

  slideOpts = {
    effect: 'flip'
  };

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.tituloPagina = this.route.snapshot.paramMap.get('tituloPagina');
  }

}

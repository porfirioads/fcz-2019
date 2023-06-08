import {Component, OnInit} from '@angular/core';
import {Evento} from '../models/evento';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {ActivatedRoute} from '@angular/router';
import {EventosService} from '../services/eventos.service';
import {LoaderService} from '../services/loader.service';
import {environment} from '../../environments/environment';
import * as moment from 'moment';
import {Sede} from '../models/sede';
import {SedesService} from '../services/sedes.service';
import {PopoverController} from '@ionic/angular';
import {EncuestaComponent} from '../components/encuesta/encuesta.component';
import {ColorService} from '../services/color.service';

@Component({
  selector: 'app-eventos-lista',
  templateUrl: './eventos-lista.page.html',
  styleUrls: ['./eventos-lista.page.scss'],
})
export class EventosListaPage implements OnInit {
  eventos: Evento[];
  categoriaId: number;
  serverUrl: string;
  imagesLoaded: number;
  tituloPagina: string;
  detalleSede: Sede;
  eventoSeleccionado: number;
  categoriaBgClass: string;

  constructor(private statusBar: StatusBar,
              private route: ActivatedRoute,
              private eventosService: EventosService,
              private loader: LoaderService,
              private sedesService: SedesService,
              private popoverController: PopoverController,
              private colorService: ColorService) {
  }

  ngOnInit() {
    this.loader.showLoader();
    this.imagesLoaded = 0;
    this.statusBar.styleBlackOpaque();
    this.statusBar.backgroundColorByHexString('#072424');
    this.categoriaId = parseInt(this.route.snapshot.paramMap.get('categoriaId'), 10);
    this.categoriaBgClass = this.colorService.getBgClassCategoria(this.categoriaId);
    this.serverUrl = environment.serverUrl;
    this.tituloPagina = this.route.snapshot.paramMap.get('tituloPagina');
    this.detalleSede = null;
    this.eventoSeleccionado = 0;
    this.getListaEventos();
    this.getDetalleSede();
  }

  /**
   * Llama al servicio de eventos para obtener la lista de eventos dentro de
   * la categoría y/o fecha especificados.
   */
  getListaEventos() {
    const staticThis = this;

    const onEventosRecibidos = function (response) {
      const eventosResponse = response as Evento[];

      for (let i = 0; i < eventosResponse.length; i++) {
        eventosResponse[i].tarjeta_frontal =
          `${environment.serverUrl}/${eventosResponse[i].tarjeta_frontal}`;
        eventosResponse[i].tarjeta_trasera =
          `${environment.serverUrl}/${eventosResponse[i].tarjeta_trasera}`;
      }

      staticThis.eventos = eventosResponse;

      setTimeout(() => {
        staticThis.loader.hideLoader();
      }, 1000);
    };

    const fecha = moment(this.tituloPagina, 'YYYY-MM-DD', true);
    const esFecha = fecha.isValid();

    // console.log(`Trabajando con fecha (${this.tituloPagina}): ${esFecha}`);

    if (esFecha) {
      const fechaStr = this.tituloPagina;
      this.tituloPagina = fecha.format('DD/MM/YYYY');

      return this.eventosService
        .getListaEventosPorFecha(this.categoriaId, fechaStr)
        .subscribe(onEventosRecibidos);
    }

    return this.eventosService.getListaEventos(this.categoriaId)
      .subscribe(onEventosRecibidos);
  }

  /**
   * Obtiene los detalles de una sede, en caso de tratarse de la lista de
   * eventos por sede.
   */
  getDetalleSede() {
    return this.sedesService.getDetalleSede(this.categoriaId)
      .subscribe((response) => {
        this.detalleSede = response as Sede;
        console.log(`Categoria ${this.categoriaId} es la sede ${this.detalleSede.lat}`);

        setTimeout(() => {
          this.loader.hideLoader();
        }, 1000);
      }, (error) => {
        this.detalleSede = null;
        console.log(`Categoria ${this.categoriaId} no es sede`);
      });
  }

  /**
   * Callback ejecutado cuando la imagen de un evento se carga.
   *
   * @param eventoId Id del evento cargado.
   */
  imageLoaded(eventoId: number) {
    this.imagesLoaded++;
  }

  /**
   * Lanza el popover para calificar un evento.
   */
  async calificarEvento() {
    console.log(`Se calificará el evento ${this.eventoSeleccionado}`);

    const modal = await this.popoverController.create({
      component: EncuestaComponent,
      componentProps: {eventoId: this.eventoSeleccionado},
      cssClass: 'big-popover',
    });

    return await modal.present();
  }

  /**
   * Habilita el módulo de opinión de evento al seleccionar uno de la lista.
   *
   * @param evento Interacción de UI que desencadena la llamada al método.
   * @param eventoId Id del evento del FCZ seleccionado.
   */
  seleccionarEvento(evento: MouseEvent, eventoId: number) {
    console.log(`Se seleccionó el evento ${eventoId}`);

    if (eventoId !== 0) {
      evento.stopPropagation();
    }

    this.eventoSeleccionado = eventoId;
  }

}

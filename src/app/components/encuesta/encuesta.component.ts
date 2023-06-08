import {Component, OnInit} from '@angular/core';
import {Encuesta} from '../../models/encuesta';
import {NavParams, PopoverController} from '@ionic/angular';
import {LoaderService} from '../../services/loader.service';
import {EventosService} from '../../services/eventos.service';
import {Sede} from '../../models/sede';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.scss'],
})
export class EncuestaComponent implements OnInit {
  encuesta: Encuesta;
  validationErrors: string[];

  constructor(private navParams: NavParams,
              private loader: LoaderService,
              private popoverController: PopoverController,
              private eventosService: EventosService) {
  }

  ngOnInit() {
    this.encuesta = new Encuesta();
    this.encuesta.evento_id = this.navParams.get('eventoId');
    this.validationErrors = [];
  }

  /**
   * Valida el formulario de encuesta.
   */
  validarEncuesta() {
    this.validationErrors = [];

    if (!this.encuesta.procedencia) {
      this.validationErrors.push('Debes seleccionar la procedencia');
    }

    if (!this.encuesta.edad) {
      this.validationErrors.push('Debes seleccionar la edad');
    }

    if (!this.encuesta.sexo) {
      this.validationErrors.push('Debes seleccionar el sexo');
    }

    if (!this.encuesta.calificacion) {
      this.validationErrors.push('Debes seleccionar la calificación');
    }

    if (this.encuesta.comentario && this.encuesta.comentario.length > 300) {
      this.validationErrors.push('El comentario debe ser de máximo 300 caracteres');
    }

    return this.validationErrors.length === 0;
  }

  /**
   * Envía la encuesta al servidor.
   */
  enviarEncuesta() {
    if (this.validarEncuesta()) {
      console.log('Encuesta válida', this.encuesta);
      this.loader.showLoader();
      const staticThis = this;

      const dismissPopover = function () {
        setTimeout(async () => {
          staticThis.loader.hideLoader();
          await staticThis.popoverController.dismiss();
        }, 1000);
      };

      this.eventosService.calificarEvento(this.encuesta)
        .subscribe((response) => {
          console.log(response);
          dismissPopover();
        }, (error) => {
          dismissPopover();
          console.log(error);
        });
    } else {
      console.log('Encuesta con errores de validación', this.encuesta);
    }
  }
}

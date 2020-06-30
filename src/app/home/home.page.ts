import { Component } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { ImagenModalPage } from '../imagen-modal/imagen-modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  imagenes = ['1.jpg'];
  constructor(private modalCtrl : ModalController) {}

  verImagen(index){

    this.modalCtrl.create({
      component : ImagenModalPage,
      componentProps : {
        index : index
       
      }
      
    }).then(modal => modal.present())
  }
}

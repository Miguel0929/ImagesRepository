import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IonSlides, NavParams, ModalController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-imagen-modal',
  templateUrl: './imagen-modal.page.html',
  styleUrls: ['./imagen-modal.page.scss'],
})
export class ImagenModalPage implements OnInit {
  indice: number;

  options = {
    pager : true,
    zoom : {
      maxRatio : 4
    }
  }
  @ViewChild('slides') slides : IonSlides;

  @ViewChild('slides', {read : ElementRef}) slide: ElementRef;
  imagenes = ['1.jpg'];
  constructor(private modalCtrl : ModalController, private navparams : NavParams) { 

  this.indice = this.navparams.get('index');
  console.log(this.indice)
  }

  ngOnInit() {
    console.log(this.slide);

    
  }
  cerrarModal(){
    this.modalCtrl.dismiss();
  }


  zoom(zoom:boolean){
    if(zoom){
      this.slide.nativeElement.swiper.zoom.in()
    }
    else{
      this.slide.nativeElement.swiper.zoom.out()
    }
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  fecha: string = "";
  respuesta: String = "";

  constructor() { }
  Obtener(): void {
    let date = new Date(this.fecha);
    let month = date.getMonth() + 1;
    let day = date.getDate() + 1;

    console.log(day)
    console.log(month)

    if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
      this.respuesta = "Acuario";
    } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
      this.respuesta = "Piscis";
    } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
      this.respuesta = "Aries";
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
      this.respuesta = "Tauro";
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
      this.respuesta = "Geminis";
    } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
      this.respuesta = "Cancer";
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
      this.respuesta = "Leo";
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
      this.respuesta = "Virgo";
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
      this.respuesta = "Libra";
    } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
      this.respuesta = "Escorpio";
    } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
      this.respuesta = "Sagitario";
    } else {
      this.respuesta = "Capricornio";
    }


  }
}

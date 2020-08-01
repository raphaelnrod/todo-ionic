import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private alertCtrl : AlertController) {}

  async addTask(){
    const alert = await this.alertCtrl.create({
      header: 'Adicionar nova tarefa',
      cssClass: 'custom-alertDanger',
      inputs: [
        {
          name: 'task',
          type: 'text',
          cssClass: 'myalert',
          placeholder: 'O que deseja fazer?'
        }
      ],
      buttons: [
        { 
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'myalert',
          handler: () => {
            console.log("cancel funcionando");
          }
        },
        { 
          text: 'Adicionar',
          cssClass: 'theme-color',
          handler: (form) => {
            this.add(form.task);
          }
        }
      ]
    });
    await alert.present();
  }

  delete() {
    console.log("Apagando item")
  }

  update() {
    console.log("Atualizando item")
  }

  unread(item){
    console.log("Unread funcionando")
  }
}

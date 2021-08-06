import { Component } from '@angular/core';
import {AlertController} from "@ionic/angular";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private data: any;

  constructor(private alert: AlertController) {
    this.data = [
      {sequence: '+1', response: 'You\'re a fag'},
      {sequence: '+2', response: 'You suck penis sometimes'},
      {sequence: '+3', response: 'The vaginal creese fears you'},
      {sequence: '+4', response: 'You were a failed abortion'},
      {sequence: '+5', response: 'You seek cock'}
    ];
  }

  equals() {

    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    var answer = (<HTMLInputElement>document.getElementById('answer')).value;

    console.log('this.data ', this.data);
    if(answer.includes('666')) {
      this.promptSequence();
    }
    if(this.data !== undefined && this.data.length > 0) {
      console.log('else if');
      for (let i = 0; i < this.data.length; i++) {
        console.log('this.data[' + i + ']', this.data[i]);
        console.log('answer.includes(this.data[i].sequence ', answer.includes(this.data[i].sequence));
        if(answer.includes(this.data[i].sequence)) {
          this.spin();
          (<HTMLInputElement>document.getElementById('answer')).value = this.data[i].response;
          break;
        }
        this.calculate(answer);

      }
    } else {
      this.calculate(answer);
    }
  }

  calculate(answer: string) {
    (<HTMLInputElement>document.getElementById('answer')).value = eval(answer);
  }
  spin() {
    (<HTMLInputElement>document.getElementById('answer'))
      .animate([
      // keyframes
      //   { transform: 'translateX(0%)' },
      //   { transform: 'translateY(100%)' }
        { transform: 'rotate(0deg)' },
        { transform: 'rotate(360deg)' }


    ], {
      // timing options
      duration: 1000,
      iterations: 1
    });
    // (<HTMLInputElement>document.getElementById('answer')).style.webkitTransform = 'rotate(360deg)';
  }

  async promptSequence() {
    const alert = await this.alert.create({
      cssClass: 'my-custom-class',
      header: 'Prompt!',
      inputs: [
        {
          name: 'sequence',
          type: 'text',
          id: 'sequence',
          placeholder: '0'
        },
        {
          name: 'response',
          type: 'text',
          id: 'response',
          placeholder: 'You suck at math!'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            console.log('Confirm Ok ', data);
            console.log('ok data ', this.data);
            this.data.push(data);
            console.log('ok data post push', this.data);

          }
        }
      ]
    });

    await alert.present();
  }
}

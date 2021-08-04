import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  equals() {

    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    var answer = (<HTMLInputElement>document.getElementById('answer')).value;
    (<HTMLInputElement>document.getElementById('answer')).style.webkitTransitionDuration= '1s';
    (<HTMLInputElement>document.getElementById('answer')).style.webkitTransform = 'rotate(40deg)';
    console.log(answer);
    console.log(answer.includes('+1'));
    if(answer.includes('+1')) {
      (<HTMLInputElement>document.getElementById('answer')).value = 'You\'re a fag';
    } else if(answer.includes('+2')) {
      (<HTMLInputElement>document.getElementById('answer')).value = 'You suck penis sometimes';
    } else if(answer.includes('+3')) {
      (<HTMLInputElement>document.getElementById('answer')).value = 'The vaginal creese fears you';
    } else if(answer.includes('+4')) {
      (<HTMLInputElement>document.getElementById('answer')).value = 'You were a failed abortion';
    }
    else if(answer.includes('+5')) {
      (<HTMLInputElement>document.getElementById('answer')).value = 'You seek cock';
    }
    else if(answer.includes('+6')) {
      // (<HTMLInputElement>document.getElementById('answer')).value = 'He who seeks ';
    } else {
      (<HTMLInputElement>document.getElementById('answer')).value = eval(answer);

    }
    // eslint-disable-next-line no-eval
    console.log(document.getElementById('answer'));
  }
}

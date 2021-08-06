import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-show-sequences',
  templateUrl: './show-sequences.component.html',
  styleUrls: ['./show-sequences.component.scss'],
})
export class ShowSequencesComponent implements OnInit {

  @Input() data: any;

  constructor(private modalController: ModalController) { }

  ngOnInit() {
    console.log('showSequence ngoninit data ', this.data);
  }

  dismissModal() {
    this.modalController.dismiss();
  }

  trackUnits(index, data) {
    return data.sequence; // or item.id
  }

}

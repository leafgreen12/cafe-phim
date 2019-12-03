import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import {FirebaseService} from '../../services/firebase.service';

@Component({
  selector: 'ngx-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  myControl = new FormControl();
  @Output() toggleMenu = new EventEmitter();
  openMenuUserChild = true;
  openSearchMobie = true;
  openSearchHeader = true;
  dichVuList = [];
  cineCafe = [];

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.firebaseService.getItems('cine-cafe').subscribe( item => {
      this.cineCafe = item;
    });
    this.firebaseService.getItems('dich-vu').subscribe( item => {
      this.dichVuList = item;
    });
  }
  onToggleMenuUserChild() {
    this.openMenuUserChild = !this.openMenuUserChild;
  }
  onToggleSearchMobie() {
    this.openSearchMobie = !this.openSearchMobie;
  }
  onToggleMenu() {
    this.toggleMenu.emit();
  }
  openToggleSearchHeader() {
    this.openSearchHeader = !this.openSearchHeader;
  }

}

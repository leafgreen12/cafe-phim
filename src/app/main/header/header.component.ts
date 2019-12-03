import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import {FirebaseService} from '../../services/firebase.service';

@Component({
  selector: 'ngx-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() toggleMenu = new EventEmitter();
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
}

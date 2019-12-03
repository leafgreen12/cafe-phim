import { Component, OnInit, ViewChild } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';

@Component({
  selector: 'ngx-chi-duong-page',
  templateUrl: './chi-duong-page.component.html',
  styleUrls: ['./chi-duong-page.component.scss'],
})
export class ChiDuongPageComponent implements OnInit {

  isHiddenSidebar = false;
  cineCafe = [];

  onToggleMenu() {
  }

  constructor(private firebaseService: FirebaseService) {

  }

  ngOnInit(): void {
    this.firebaseService.getItems('cine-cafe').subscribe( item => {
      this.cineCafe = item;
    });
  }
}

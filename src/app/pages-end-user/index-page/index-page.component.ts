import { Component, OnInit, ViewChild } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';

@Component({
  selector: 'ngx-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.scss'],
})
export class IndexPageComponent implements OnInit {

  constructor(private firebaseService: FirebaseService) {}
  isHiddenSidebar = false;
  banners = [];
  cineCafe = [];
  dichVuList = [];

  onToggleMenu() {
  }

  ngOnInit(): void {
    this.firebaseService.getItems('banners-ads').subscribe( res => {
      this.banners = res;
    });
    this.firebaseService.getItems('cine-cafe').subscribe( item => {
      this.cineCafe = item;
    });
    this.firebaseService.getItems('dich-vu').subscribe( item => {
      this.dichVuList = item.slice(0, 3);
    });
  }

}

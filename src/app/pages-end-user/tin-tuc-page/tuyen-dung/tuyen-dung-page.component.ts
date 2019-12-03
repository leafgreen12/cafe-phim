import { Component, OnInit, ViewChild } from '@angular/core';
import {FirebaseService} from '../../../services/firebase.service';

@Component({
  selector: 'ngx-tuyen-dung-page',
  templateUrl: './tuyen-dung-page.component.html',
  styleUrls: ['./tuyen-dung-page.component.scss'],
})
export class TuyenDungPageComponent implements OnInit {

  isHiddenSidebar = false;
  tuyenDungList = [];
  dichVuList: any[];

  constructor(private firebaseService: FirebaseService) { }

  onToggleMenu() {
  }

  ngOnInit(): void {
    this.firebaseService.getItems('tuyen-dung').subscribe( item => {
      this.tuyenDungList = item;
    });
    this.firebaseService.getItems('dich-vu').subscribe( item => {
      this.dichVuList = item;
    });
  }
}

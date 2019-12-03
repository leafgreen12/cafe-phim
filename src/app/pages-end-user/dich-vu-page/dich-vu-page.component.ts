import { Component, OnInit, ViewChild } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';

@Component({
  selector: 'ngx-dich-vu-page',
  templateUrl: './dich-vu-page.component.html',
  styleUrls: ['./dich-vu-page.component.scss'],
})
export class DichVuPageComponent implements OnInit {

  isHiddenSidebar = false;
  dichVuList = [];

  onToggleMenu() {
  }
  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.firebaseService.getItems('dich-vu').subscribe( item => {
      this.dichVuList = item;
    });
  }

}

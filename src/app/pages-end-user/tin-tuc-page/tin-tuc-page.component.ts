import { Component, OnInit, ViewChild } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';

@Component({
  selector: 'ngx-menu-page',
  templateUrl: './tin-tuc-page.component.html',
  styleUrls: ['./tin-tuc-page.component.scss']
})
export class TinTucPageComponent implements OnInit {

  isHiddenSidebar = false;
  cafePhimList = [];
  khuyenMaiList = [];

  constructor(private firebaseService: FirebaseService) { }

  onToggleMenu() {
  }

  ngOnInit(): void {
    this.firebaseService.getItems('cafe-phim', 'createdDate').subscribe( item => {
      this.cafePhimList = item;
    });
    this.firebaseService.getItems('khuyen-mai', 'createdDate').subscribe( item => {
      this.khuyenMaiList = item;
    });
  }

}

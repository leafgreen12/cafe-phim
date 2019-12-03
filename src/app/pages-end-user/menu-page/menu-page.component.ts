import { Component, OnInit, ViewChild } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FirebaseService} from '../../services/firebase.service';

@Component({
  selector: 'ngx-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.scss'],
})
export class MenuPageComponent implements OnInit {

  isHiddenSidebar = false;
  content: any;

  constructor(private firebaseService: FirebaseService) { }

  onToggleMenu() {
  }

  ngOnInit(): void {
    this.firebaseService.getItems('thuc-don', 'createdDate').subscribe( item => {
      this.content = item[0];
    });
  }

}

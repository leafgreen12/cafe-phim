import { Component, OnInit, ViewChild } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';

@Component({
  selector: 'ngx-gia-phong-page',
  templateUrl: './gia-phong-page.component.html',
  styleUrls: ['./gia-phong-page.component.scss'],
})
export class GiaPhongPageComponent implements OnInit {

  isHiddenSidebar = false;
  content: any;

  constructor(private firebaseService: FirebaseService) { }

  onToggleMenu() {
  }

  ngOnInit(): void {
    this.firebaseService.getItems('gia-phong', 'createdDate').subscribe( item => {
      this.content = item[0];
    });
  }
}

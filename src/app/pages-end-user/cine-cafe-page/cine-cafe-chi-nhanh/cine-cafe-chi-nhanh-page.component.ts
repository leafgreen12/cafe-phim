import { Component, OnInit, ViewChild } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FirebaseService} from '../../../services/firebase.service';

@Component({
  selector: 'ngx-cine-cafe-chi-nhanh-page',
  templateUrl: './cine-cafe-chi-nhanh-page.component.html',
  styleUrls: ['./cine-cafe-chi-nhanh-page.component.scss'],
})
export class CineCafeChiNhanhPageComponent implements OnInit {

  isHiddenSidebar = false;
  content: any;
  dichVuList = [];

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private firebaseService: FirebaseService) {}

  onToggleMenu() {
  }

  ngOnInit(): void {
    this.activatedRoute.parent.url.subscribe((urlPath) => {
      const list = this.router.url.split('/');
      this.activatedRoute.paramMap.subscribe(params => {
        this.firebaseService.getItemsGroup(list[1], params.get('key')).subscribe( item => {
          this.content = item;
        });
      });
    });
    this.firebaseService.getItems('dich-vu').subscribe( item => {
      this.dichVuList = item;
    });
  }

}

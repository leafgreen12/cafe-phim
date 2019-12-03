import { Component, OnInit, ViewChild } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FirebaseService} from '../../../services/firebase.service';

@Component({
  selector: 'ngx-menu-dich-vu-page',
  templateUrl: './menu-dich-vu-page.component.html',
  styleUrls: ['./menu-dich-vu-page.component.scss'],
})
export class MenuDichVuPageComponent implements OnInit {

  isHiddenSidebar = false;
  content: any;

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
  }

}

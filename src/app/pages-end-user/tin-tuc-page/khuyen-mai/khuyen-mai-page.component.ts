import { Component, OnInit, ViewChild } from '@angular/core';
import {FirebaseService} from '../../../services/firebase.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'ngx-khuyen-mai-page',
  templateUrl: './khuyen-mai-page.component.html',
  styleUrls: ['./khuyen-mai-page.component.scss'],
})
export class KhuyenMaiPageComponent implements OnInit {

  isHiddenSidebar = false;
  khuyenMaiList = [];
  config: any;
  dichVuList: any[];

  constructor(private firebaseService: FirebaseService,
              private router: Router,
              private route: ActivatedRoute) {
    this.config = {
      currentPage: 1,
      itemsPerPage: 10,
    };
    this.route.queryParamMap
      .map(params => params.get('page'))
      .subscribe(page => (this.config.currentPage = page));
  }

  onToggleMenu() {
  }

  ngOnInit(): void {
    this.firebaseService.getItems('khuyen-mai').subscribe( item => {
      this.khuyenMaiList = item;
    });
    this.firebaseService.getItems('dich-vu').subscribe( item => {
      this.dichVuList = item;
    });
  }

  pageChange(newPage: number) {
    this.router.navigate(['/tin-tuc/khuyen-mai'], { queryParams: { page: newPage } });
  }
}

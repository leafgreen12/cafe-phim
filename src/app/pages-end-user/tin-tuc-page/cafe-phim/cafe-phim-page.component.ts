import { Component, OnInit, ViewChild } from '@angular/core';
import {FirebaseService} from '../../../services/firebase.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'ngx-cafe-phim-page',
  templateUrl: './cafe-phim-page.component.html',
  styleUrls: ['./cafe-phim-page.component.scss'],
})
export class CafePhimPageComponent implements OnInit {

  isHiddenSidebar = false;
  cafePhimList = [];
  config: any;
  dichVuList: any[];
  labels: any = {
    previousLabel: '<li><a><i class="fa fa-long-arrow-left" aria-hidden="true"></i></a></li>',
    nextLabel: '<li><a><i class="fa fa-long-arrow-right" aria-hidden="true"></i></a></li>',
    screenReaderPaginationLabel: 'Pagination',
    screenReaderPageLabel: 'page',
    screenReaderCurrentLabel: `You're on page`,
  };

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
    this.firebaseService.getItems('cafe-phim').subscribe( item => {
      this.cafePhimList = item;
    });
    this.firebaseService.getItems('dich-vu').subscribe( item => {
      this.dichVuList = item;
    });
  }

  pageChange(newPage: number) {
    this.router.navigate(['/tin-tuc/cafe-phim'], { queryParams: { page: newPage } });
  }
}

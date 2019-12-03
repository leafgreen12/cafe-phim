import { Component, OnInit, ViewChild } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FirebaseService} from '../../../services/firebase.service';

@Component({
  selector: 'ngx-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss'],
})
export class BlogPageComponent implements OnInit {

  dichVuList: any[];
  isHiddenSidebar = false;
  content: any;

  constructor(private activatedRoute: ActivatedRoute,
              private firebaseService: FirebaseService,
              private router: Router) {}

  onToggleMenu() {
  }

  ngOnInit(): void {
    this.activatedRoute.parent.url.subscribe((urlPath) => {
      const list = this.router.url.split('/');
      this.activatedRoute.paramMap.subscribe(params => {
        this.firebaseService.getItemsGroup(list[2], params.get('key')).subscribe( item => {
          this.content = item;
        });
      });
    });
    this.firebaseService.getItems('dich-vu').subscribe( item => {
      this.dichVuList = item;
    });
  }

}

import {Component, OnInit} from '@angular/core';
import {LocalDataSource} from 'ng2-smart-table';
import {SmartTableData} from '../../../@core/data/smart-table';
import {FirebaseService} from '../../../services/firebase.service';
import {ActivatedRoute, Router} from '@angular/router';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'ngx-form-layouts',
  styleUrls: ['./form-layouts.component.scss'],
  templateUrl: './form-layouts.component.html',
})
export class FormLayoutsComponent implements OnInit {
  settings: any;
  param: any;

  source: LocalDataSource = new LocalDataSource();

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private firebaseService: FirebaseService,
              private service: SmartTableData,
              private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.firebaseService.getItems(params.get('key')).subscribe( res => {
        this.param = params.get('key');
        res.map( item => {
          item.createdDate = this.datePipe.transform(item.createdDate.toDate(), 'dd-MM-yyyy HH:mm:ss');
        });
        this.source.load(res);
        if (params.get('key') === 'dat-phong') {
          this.settings = {
            hideSubHeader: true,
            actions: {
              edit: false,
            },
            add: {
              addButtonContent: '<i class="nb-plus"></i>',
              createButtonContent: '<i class="nb-checkmark"></i>',
              cancelButtonContent: '<i class="nb-close"></i>',
            },
            delete: {
              deleteButtonContent: '<i class="nb-trash"></i>',
              confirmDelete: true,
            },
            columns: {
              name: {
                title: 'Name',
                type: 'string',
              },
              phone: {
                title: 'phone',
                type: 'string',
              },
              location: {
                title: 'location',
                type: 'string',
              },
              message: {
                title: 'message',
                type: 'string',
              },
              createdDate: {
                title: 'createdDate',
                type: 'string',
              },
            },
          };
        } else {
          this.settings = {
            mode: 'inline',
            hideSubHeader: true,
            actions: {
              custom: [{ name: 'routeToAPage', title: '<i class="nb-edit"></i>'}],
              edit: false,
              delete: true,
            },
            add: {
              addButtonContent: '<i class="nb-plus"></i>',
              createButtonContent: '<i class="nb-checkmark"></i>',
              cancelButtonContent: '<i class="nb-close"></i>',
            },
            edit: {
              editButtonContent: '<i class="nb-edit"></i>',
              saveButtonContent: '<i class="nb-checkmark"></i>',
              cancelButtonContent: '<i class="nb-close"></i>',
            },
            delete: {
              deleteButtonContent: '<i class="nb-trash"></i>',
              confirmDelete: true,
            },
            columns: {
              title: {
                title: 'title',
                type: 'string',
              },
              image: {
                title: 'image',
                type: 'string',
              },
              location: {
                title: 'location',
                type: 'string',
              },
              createdDate: {
                title: 'createdDate',
                type: 'string',
              },
            },
          };
        }
      });
    });
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.firebaseService.deleteItem(this.param, event.data.id);
    } else {
      event.confirm.reject();
    }
  }

  onEdit(event): void {
    this.router.navigate([`pages/forms/create/${this.param}`], { queryParams: { id: event.data.id } });
  }
}

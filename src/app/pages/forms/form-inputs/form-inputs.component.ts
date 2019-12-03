import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FirebaseService} from '../../../services/firebase.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'ngx-form-inputs-cine-cafe',
  styleUrls: ['./form-inputs.component.scss'],
  templateUrl: './form-inputs.component.html',
})
export class FormInputsComponent implements OnInit {

  isHiddenSidebar = false;
  form: FormGroup;
  param: string;
  queryParam: string;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private firebaseService: FirebaseService,
              private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.param = params.get('key');
      this.activatedRoute.queryParamMap.subscribe(queryParams => {
        if (this.param === 'banners-ads') {
          this.buildFormBanner();
        } else {
          if (queryParams.get('id')) {
            this.queryParam = queryParams.get('id');
            this.firebaseService.getItemsGroup(this.param, queryParams.get('id')).subscribe( res => {
              if (this.param === 'cine-cafe') {
                this.buildFormCafe(res);
              } else {
                this.buildForm(res);
              }
            });
          } else {
            if (this.param === 'cine-cafe') {
              this.buildFormCafe();
            } else {
              this.buildForm();
            }
          }
        }
      });
    });
  }

  buildForm(item?) {
    this.form = this.fb.group({
      title: [item ? item.title : '', Validators.required ],
      content: [item ? item.content : '', Validators.required ],
      image: [item ? item.image : '', Validators.required ],
      createdDate: [''],
    });
  }

  buildFormBanner() {
    this.form = this.fb.group({
      image: ['', Validators.required ],
      createdDate: [''],
    });
  }

  buildFormCafe(item?) {
    this.form = this.fb.group({
      title: [item ? item.title : '', Validators.required ],
      location: [item ? item.location : '', Validators.required ],
      content: [item ? item.content : '', Validators.required ],
      image: [item ? item.image : '', Validators.required ],
      imageMap: [item ? item.imageMap : '', Validators.required ],
      createdDate: [''],
    });
  }

  onSubmit() {
    const date = new Date();
    this.form.patchValue({
      createdDate: date,
    });
    this.form.patchValue({
      content: this.form.value.content,
    });
    if (this.queryParam) {
      this.firebaseService.updateItem(this.param, this.queryParam, this.form.value);
    } else {
      this.firebaseService.addItem(this.param, this.form.value);
      this.form.reset();
    }
  }
}

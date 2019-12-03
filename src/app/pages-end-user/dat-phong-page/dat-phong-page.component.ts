import { Component, OnInit, ViewChild } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'ngx-dat-phong-page',
  templateUrl: './dat-phong-page.component.html',
  styleUrls: ['./dat-phong-page.component.scss'],
})
export class DatPhongPageComponent implements OnInit {

  isHiddenSidebar = false;
  cineCafe = [];
  form: FormGroup;

  constructor(private firebaseService: FirebaseService,
              private fb: FormBuilder,
  ) { }

  onToggleMenu() {
  }

  ngOnInit(): void {
    this.firebaseService.getItems('cine-cafe').subscribe( item => {
      this.cineCafe = item;
      this.buildForm();
    });
  }

  buildForm() {
    this.form = this.fb.group({
      name: ['', Validators.required ],
      phone: ['', Validators.required ],
      location: [this.cineCafe[0].title, Validators.required ],
      message: ['', Validators.required ],
      createdDate: [''],
    });
  }

  onSubmit() {
    const date = new Date();
    this.form.patchValue({
      createdDate: date,
    });
    this.firebaseService.addItem('dat-phong', this.form.value);
    this.form.reset();
  }

}

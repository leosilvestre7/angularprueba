import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Service } from '../../../model/service.model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-service',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() list: Array<any>;
  @Output() public newListService = new EventEmitter();
  service: Service;
  serviceForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.service = new Service();
    this.newListService.emit(this.list);
    this.serviceForm = this.formBuilder.group({
      id: [],
      name: [],
      description: [],
      categoryId: []
    });
  }

  ngOnInit() {

  }

  setData(data: Service) {
    if (data) {
      this.serviceForm.setValue(data);
    }
  }

  saveService() {
    this.list = this.list.map(
      (service) => {
          if (service['id'] === this.serviceForm.controls['id'].value) {
            service = this.serviceForm.value;
          }
          return service;
      }
    );
    this.serviceForm.reset();
    this.newListService.emit(this.list);
  }

  cancelService() {
    this.serviceForm.reset();
  }
}

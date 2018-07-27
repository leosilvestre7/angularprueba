import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Service } from '../../../model/service.model';

@Component({
  selector: 'app-list-service',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnChanges {
  @Input() type: number;
  @Input() data: Array<any>;
  @Output() public sendData = new EventEmitter();

  public selectedId: Number;

  public list: Array<any>;

  constructor() {
  }

  ngOnChanges() {
    this.list = this.data;
    if (this.selectedId && this.selectedId !== 0) {
      this.list = this.data.filter(
        (option) => {
          return option['categoryId'] === this.selectedId;
        }
      );
    }
  }

  filtrar(type: number) {
    this.selectedId = type;
    this.list = this.data;
    if (type !== 0) {
      this.list = this.data.filter(
        (option) => {
          return option['categoryId'] === type;
        }
      );
    }
  }

  getData(data: Service) {
    this.sendData.emit(data);
  }
}

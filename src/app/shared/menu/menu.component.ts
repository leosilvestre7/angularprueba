import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input() list: Array<any>;
  @Output() public sendSelected = new EventEmitter();
  public default: Number;

  constructor() {
  }

  ngOnInit() {
    this.default = 0;
  }

  getOption(idOption) {
    this.default = idOption;
    this.sendSelected.emit(idOption);
  }
}

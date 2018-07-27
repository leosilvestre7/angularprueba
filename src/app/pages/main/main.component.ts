import { Component, ViewChild } from '@angular/core';
import { CategoryService } from '../../service/category.service';
import { ServicesService } from '../../service/services.service';
import { Service } from '../../model/service.model';
import { Category } from '../../model/category.model';
import { ListComponent } from '../service/list/list.component';
import { FormComponent } from '../service/form/form.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  public categories = [];
  public services = [];
  service: Service;
  category: Category;
  @ViewChild('card') cardComponent: ListComponent;
  @ViewChild('form') formComponent: FormComponent;

  constructor(private categoryService: CategoryService, private serviceService: ServicesService) {
    this.service = new Service();
    this.category = new Category();
    this.categories = this.categoryService.getCategories();
    this.services = this.serviceService.getServices();
  }

  getCategory(result) {
    this.cardComponent.filtrar(result);
  }

  getService(data: Service) {
    this.formComponent.setData(data);
  }

  setService(newListService) {
    this.services = newListService;
  }
}

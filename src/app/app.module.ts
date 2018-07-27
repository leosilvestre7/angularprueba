import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CategoryService } from './service/category.service';
import { ServicesService } from './service/services.service';
import { MainComponent } from './pages/main/main.component';
import { FormComponent } from './pages/service/form/form.component';
import { ListComponent } from './pages/service/list/list.component';
import { MenuComponent } from './shared/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FormComponent,
    MenuComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ServicesService, CategoryService],
  bootstrap: [AppComponent]
})

export class AppModule { }

import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { FormComponent } from './pages/service/form/form.component';
import { ListComponent } from './pages/service/list/list.component';

const routes: Routes = [
  { path: 'form', component: FormComponent },
  { path: 'list', component: ListComponent },
  { path: 'main', component: MainComponent },
  { path: '', component: MainComponent }
];

export const routing = RouterModule.forRoot(routes);

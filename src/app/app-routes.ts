import { Routes } from '@angular/router';

import { UsefactoryComponent } from './services/usefactory/usefactory/usefactory.component';
import { UseclassComponent } from './services/useclass/useclass/useclass.component';
import { UsevalueComponent } from './services/usevalue/usevalue/usevalue.component';
import { UseexistingComponent } from './services/useexisting/useexisting/useexisting.component';
import { DynamicComponent } from './dynamic -components/dynamic/dynamic.component';
import { TemplateRefComponent } from './dynamic -components/template-ref/template-ref.component';
import { SignalComponent } from './signal/signal/signal.component';

export const routes: Routes = [
  { path: '', loadChildren: () => import('./reactive-forms/form-control/form-control.module').then(m => m.FormControlModule)},
  { path: 'formgroup', loadChildren: () => import('./reactive-forms/form-group/form-group.module').then(m => m.FormGroupModule)},
  { path: 'formarray', loadChildren: () => import('./reactive-forms/form-array/form-array.module').then(m => m.FormArrayModule)},
  { path: 'dynamicformarray', loadChildren: () => import('./reactive-forms/dynamic-forms/dynamic-forms.module').then(m => m.DynamicFormsModule)},
  { path: 'checkbox', loadChildren: () => import('./reactive-forms/checkbox/checkbox.module').then(m => m.CheckboxModule)},
  { path: 'select', loadChildren: () => import('./reactive-forms/selectbox/select.module').then(m => m.SelectModule)},
  { path: 'useclass', component:UseclassComponent},
  { path: 'usefactory', component:UsefactoryComponent},
  { path: 'usevalue', component:UsevalueComponent},
  { path: 'useexisting', component:UseexistingComponent},
  { path: 'dynamic', component:DynamicComponent},
  { path: 'template', component:TemplateRefComponent},
   { path: 'signal', component:SignalComponent},
  { path: 'ngrxroute', loadChildren: () => import('./ngrx-basics/customer/customer.module').then(m => m.CustomerModule)},
];

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components/components.component';
import { CatalogFormComponent } from './components/catalog-form/catalog-form.component';
import { CatalogListComponent } from './components/catalog-list/catalog-list.component';



@NgModule({
  declarations: [
    ComponentsComponent,
    CatalogFormComponent,
    CatalogListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CatalogModule { }

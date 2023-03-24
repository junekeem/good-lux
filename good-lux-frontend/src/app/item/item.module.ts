import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { ItemAddComponent } from './item-add/item-add.component';
import { ItemEditComponent } from './item-edit/item-edit.component';



@NgModule({
  declarations: [
    ItemListComponent,
    ItemDetailsComponent,
    ItemAddComponent,
    ItemEditComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ItemModule { }

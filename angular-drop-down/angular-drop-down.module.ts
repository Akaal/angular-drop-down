import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularDropDownComponent} from "./angular-drop-down.component"
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

@NgModule({
  declarations: [AngularDropDownComponent,],
  imports: [
    CommonModule,
    PerfectScrollbarModule,
  ],
  exports: [AngularDropDownComponent],
})

export class AngularDropDownComboBoxModule { }

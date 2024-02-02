import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from "@angular/material/input"
import { MatSelectModule } from "@angular/material/select"
import { OverlayModule } from '@angular/cdk/overlay';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [],
  imports: [],
  exports: [
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    OverlayModule, 
    MatFormFieldModule, 
    MatButtonModule
  ]
})
export class MaterialModule { }

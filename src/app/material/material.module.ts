import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatToolbarModule,
    ScrollingModule,
    MatButtonModule
  ],
  exports: [
    MatCardModule,
    MatToolbarModule,
    ScrollingModule,
    MatButtonModule
  ]
})
export class MaterialModule { }

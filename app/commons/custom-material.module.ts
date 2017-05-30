import { NgModule }       from '@angular/core';
import { MaterialModule } from '@angular/material';
import { MdButtonModule } from '@angular/material';
import { MdButtonToggleModule } from '@angular/material';
import { MdCardModule } from '@angular/material';
import { MdCheckboxModule } from '@angular/material';
import { MdGridListModule } from '@angular/material';
import { MdIconModule } from '@angular/material';
import { MdInputModule } from '@angular/material';
import { MdListModule } from '@angular/material';
import { MdMenuModule } from '@angular/material';
import { MdProgressBarModule } from '@angular/material';
import { MdProgressCircleModule } from '@angular/material';
import { MdRadioModule } from '@angular/material';
import { MdSidenavModule } from '@angular/material';
import { MdSliderModule } from '@angular/material';
import { MdSlideToggleModule } from '@angular/material';
import { MdTabsModule } from '@angular/material';
import { MdToolbarModule } from '@angular/material';
import { MdTooltipModule } from '@angular/material';
import { MdDialogModule } from '@angular/material';

const MATERIAL_MODULES = [
  MdButtonModule,
  MdButtonToggleModule,
  MdCardModule,
  MdCheckboxModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdProgressBarModule,
  MdProgressCircleModule,
  MdRadioModule,
  MdSidenavModule,
  MdSliderModule,
  MdSlideToggleModule,
  MdTabsModule,
  MdToolbarModule,
  MdTooltipModule,
  MdDialogModule
];

@NgModule({
  imports: [MaterialModule.forRoot()].concat(MATERIAL_MODULES),
  exports: [MaterialModule, MATERIAL_MODULES],
})
export class CustomMaterialModule { }

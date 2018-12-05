import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LabelsPage } from './labels';

@NgModule({
  declarations: [
    LabelsPage,
  ],
  imports: [
    IonicPageModule.forChild(LabelsPage),
  ],
})
export class LabelsPageModule {}

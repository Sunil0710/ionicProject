import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrashedDetailsPage } from './trashed-details';

@NgModule({
  declarations: [
    TrashedDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(TrashedDetailsPage),
  ],
})
export class TrashedDetailsPageModule {}

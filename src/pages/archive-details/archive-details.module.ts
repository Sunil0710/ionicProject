import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ArchiveDetailsPage } from './archive-details';

@NgModule({
  declarations: [
    ArchiveDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(ArchiveDetailsPage),
  ],
})
export class ArchiveDetailsPageModule {}

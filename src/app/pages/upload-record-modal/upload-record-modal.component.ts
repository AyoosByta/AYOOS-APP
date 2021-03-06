import { Component, OnInit } from '@angular/core';
import { ModalController, ActionSheetController, PopoverController } from '@ionic/angular';
import {PopoverAddMemberPage} from './../popover-add-member/popover-add-member.page'

@Component({
  selector: 'app-upload-record-modal',
  templateUrl: './upload-record-modal.component.html',
  styleUrls: ['./upload-record-modal.component.scss'],
})
export class UploadRecordModalComponent implements OnInit {

  constructor(private modalController:ModalController,private popoverController:PopoverController,private actionSheetController:ActionSheetController) { }


  async presentAddmemberPop(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverAddMemberPage,
      componentProps:{popType:'doctorShare'},
      
      event: ev,
      animated: true,
      translucent: true,
      backdropDismiss: true,
      showBackdrop: true
    });

    return await popover.present();
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Add Record',
      buttons: [{
        text: 'Take a photo',
        icon: 'camera',
        handler: () => {
          console.log('Take photo clicked');
        }
      }, {
        text: 'Upload from gallery',
        icon: 'images',
        handler: () => {
          console.log('upload from gallery clicked');
        }
      }, {
        text: 'Upload files',
        icon: 'document',
        handler: () => {
          console.log('Upload files clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  dismissMe(){
    this.modalController.dismiss();
  }
  ngOnInit() {
  }

}

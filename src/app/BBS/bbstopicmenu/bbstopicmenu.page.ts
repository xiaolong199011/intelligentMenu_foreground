import { Component, OnInit } from '@angular/core';
import { ComService } from '../../common/ComService';
import { ComParam } from '../../common/comParam';
import { Crud } from '../../common/crud';
import { BBSTopic } from '../../models/BBSTopic';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bbstopicmenu',
  templateUrl: './bbstopicmenu.page.html',
  styleUrls: ['./bbstopicmenu.page.scss'],
})
export class BbstopicmenuPage implements OnInit {

  currentDateTime: String;

  private bbsTopic: BBSTopic = {
    id: 0,
    title: '',
    userid: 11,
    timestamp: '',
    fileid: 0,
    description: '',
  }

  constructor(
    private comParam: ComParam,
    private comService: ComService,
    private crud: Crud,
    private router: Router,
  ) {

  }


  ngOnInit() {
    this.currentDateTime = this.comParam.currentDateTime;
  }

  uploadFile() {

    this.comService.uploadFile("file", this.comParam.uploadFile).subscribe((response: any) => {
      if (200 === response.code) {
        this.bbsTopic.fileid = response.data;
        this.comService.alertInfo(response.message);
      } else {
        this.comService.alertInfo(response.message);
      }
    })
  }

  submitBBSTopic() {
    this.bbsTopic.timestamp = this.comParam.currentDateTime;
    if (this.bbsTopic.fileid === 0) {
      this.comService.alertInfo("图片不能为空，请上传图片");
    } else {
      this.crud.saveForm(this.comParam.saveBBSTopic, this.bbsTopic).subscribe((response: any) => {
        if (200 === response.code) {
          this.router.navigate(['/user/tabs/bbs']);
          this.comService.alertInfo(response.message);
        } else {
          this.comService.alertInfo(response.message);
        }
      })
    }

  }



}

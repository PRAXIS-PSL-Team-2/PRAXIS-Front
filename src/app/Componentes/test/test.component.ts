import { Component, OnInit } from '@angular/core';
import {UploadVideoService} from  '../../services/upload-video.service';

 
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
 
  selectedFiles: FileList;
  progress: Number = 0;

  constructor(private uploadService: UploadVideoService) { }
 
  ngOnInit() {
  } 
 
  upload() {
    const file = this.selectedFiles.item(0);


    const result = this.uploadService.uploadfile(file);

    const progressInterval = setInterval(() => {
      this.progress = this.uploadService.getProgress(); 



      if(this.progress == 100) {
        clearInterval(progressInterval);
      }
    }, 100);

    

  }

  getFileUrl(key:String){
    return this.uploadService.getFileUrl(key);
  }
 
  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
}
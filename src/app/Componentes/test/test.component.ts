import { Component, OnInit } from '@angular/core';
import { UploadVideoService } from '../../services/upload-video.service';

 
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
 
  selectedFiles: FileList;
 
  constructor(private uploadService: UploadVideoService) { }
 
  ngOnInit() {
  }
 
  upload() {
    const file = this.selectedFiles.item(0);
    this.uploadService.uploadfile(file);
  }
 
  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
}
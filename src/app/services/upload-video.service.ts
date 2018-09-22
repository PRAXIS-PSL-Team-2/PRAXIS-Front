import { Injectable } from '@angular/core';
import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';
 
@Injectable({
  providedIn: 'root'
})
export class UploadVideoService {
  public video:File;
  FOLDER = 'presentation-videos/';
 
  constructor() { }
  setVideo(file:File){
    this.video=file;
  }
  getVideo(){
    return this.video;
  }

  uploadfile(file) {
 
    const bucket = new S3(
      {
        accessKeyId: 'AKIAIKSKLVQ4BMWCZPEA',
        secretAccessKey: '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',
        region: 'us-east-1'
      }
    );
 
    const params = {
      Bucket: 'praxis-presentation-videos',
      Key: this.FOLDER + file.name,
      Body: file
    };

    bucket.upload(params).on('httpUploadProgress', function(evt) {
      alert("Uploaded :: " + String((evt.loaded * 100) / evt.total)+'%');
      }).send(function(err, data) {
        if (err) {
          console.log('There was an error uploading your file: ', err);
          return false;
        }
        else{
          console.log('Successfully uploaded file.', data);
          return true;
        }

        }
      
      );
 
    
  }
 
}
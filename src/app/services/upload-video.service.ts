import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';

@Injectable({
  providedIn: 'root'
})
export class UploadVideoService {
  public video: File;
  public progress: Number = 0;
  public aproved:boolean=false;
  FOLDER = environment.folder;
  key: string;


  private bucket = new S3(
    {
      accessKeyId: environment.bucket.accessKeyId,
      secretAccessKey:environment.bucket.secretAccessKey,
      region: environment.bucket.region
    }
  );

  constructor() { }

  setVideo(file: File) {
    this.video = file;
  }
  getVideo() {
    return this.video;
  }

  getProgress() {
    return this.progress;
  }

  setProgress(progress: Number) {
    this.progress = progress;
  }

  uploadfile(file) {
    this.video=file;
    const params = {
      Bucket: environment.Bucket,
      Key: this.FOLDER + file.name,
      Body: file
    };
    this.key = this.FOLDER + file.name;
    this.bucket.upload(params).on('httpUploadProgress', (evt) => {
      this.setProgress((evt.loaded * 100) / evt.total);
    }).send(function (err, data) {
      if (err) {
        console.log('There was an error uploading your file: ', err);

      }
      else {
        console.log('Successfully uploaded file.', data);
        this.key = params.Key;
        return true;
      }
    });

  }

  getFileUrl(key: String) {

    const params = {
      Bucket: environment.Bucket,
      Key: key,
    };

    var url = this.bucket.getSignedUrl('getObject', params);

    return url;
  }
  getKey() {
    return this.key;
  }
}

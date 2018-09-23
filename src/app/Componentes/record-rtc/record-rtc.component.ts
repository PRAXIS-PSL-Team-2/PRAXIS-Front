import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Http, ResponseContentType } from '@angular/http';
import * as RecordRTC from 'recordrtc';
import {UploadVideoService} from '../../services/upload-video.service'
@Component({
  selector: 'record-rtc',
  templateUrl: './record-rtc.component.html',
  styleUrls: ['./record-rtc.component.scss']
})
export class RecordRTCComponent implements AfterViewInit{

  private stream: MediaStream;
  private recordRTC: any;
  videotoup:any;
  s1:string="btn bg-dark text-white";
  s2:string="btn bg-dark text-white";
  @ViewChild('video') video;

  constructor(private uploadService: UploadVideoService) {
    // Do stuff
  }

  ngAfterViewInit() {
    // set the initial state of the video
    let video:HTMLVideoElement = this.video.nativeElement;
    video.muted = false;
    video.controls = true;
    video.autoplay = false;
  }

  toggleControls() {
    let video: HTMLVideoElement = this.video.nativeElement;
    video.muted = !video.muted;
    video.controls = !video.controls;
    video.autoplay = !video.autoplay;
  }

  successCallback(stream: MediaStream) {

    var options = {
      mimeType: 'video/webm', // or video/webm\;codecs=h264 or video/webm\;codecs=vp9
      audioBitsPerSecond: 128000,
      videoBitsPerSecond: 128000,
      bitsPerSecond: 128000 // if this line is provided, skip above two
    };
    this.stream = stream;
    this.recordRTC = RecordRTC(stream, options);
    this.recordRTC.startRecording();
    let video: HTMLVideoElement = this.video.nativeElement;
    video.src = window.URL.createObjectURL(stream);
    this.toggleControls();
  }

  errorCallback() {
    //handle error here
  }

  processVideo(audioVideoWebMURL) {
    let video: HTMLVideoElement = this.video.nativeElement;
    let recordRTC = this.recordRTC;
    video.src = audioVideoWebMURL;
    this.toggleControls();
    var recordedBlob = recordRTC.getBlob();
    recordRTC.getDataURL(function (dataURL) { });
  }

  startRecording() {
    this.s1="btn bg-dark text-white"
    this.s2="btn bg-dark text-primary"
    let mediaConstraints = {
      video: true/*{
        mandatory: {
            maxHeight: 720,
            maxWidth: 1280
        },
        optional: [
            {minWidth: 320},
            {minWidth: 640},
            {minWidth: 960},
            {minWidth: 1024},
            {minWidth: 1280}
        ]
    }*/, audio: true
    };
    navigator.mediaDevices
      .getUserMedia(mediaConstraints)
      .then(this.successCallback.bind(this), this.errorCallback.bind(this));


  }
  
 
  machete(){
    this.s1="btn bg-dark text-primary";
    this.s2="btn bg-dark text-white"
    this.stopRecording();
  }
  stopRecording() {
    this.s2="btn bg-dark text-white"
    let recordRTC = this.recordRTC;
    recordRTC.stopRecording(this.processVideo.bind(this));    
    let stream = this.stream;
    stream.getAudioTracks().forEach(track => track.stop());
    stream.getVideoTracks().forEach(track => track.stop());

    let blob = this.recordRTC.getBlob();  
    /*var url= window.URL.createObjectURL(blob);
    window.open(url);
    console.log(blob);*/     
    let fileObject = new File([blob], "", {
      type: 'video/webm'
    });
    this.uploadService.setVideo(fileObject);
    console.log(fileObject)

  }

  download() {    
    this.stopRecording();
    this.machete();
    this.s1="btn bg-dark text-primary"
    this.s2="btn bg-dark text-white"

    
    this.recordRTC.save('video.webm');
  }

  


}
  

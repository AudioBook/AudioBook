import { Component, OnInit } from '@angular/core';
import { BookDataService } from 'src/app/services/book-data.service';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.css']
})
export class AudioPlayerComponent implements OnInit {

  public audioUrl:string
  public audioElement:HTMLAudioElement;

  constructor(public bookService:BookDataService) { }

  ngOnInit() {
    this.audioElement=document.querySelector('#audioPlayer')
    this.audioElement.hidden=true
    this.bookService.currentAudioUrl.subscribe(url=>{
      if(url=='xxx')// dont try to play. instead pause and hide audio.
      {
        this.audioElement.pause()
        this.audioElement.controls=false
      }
      else
      {
        this.audioUrl=url
        this.startPlaying()
        this.audioElement.controls=true
        this.audioElement.play()
      }
    })
  }

  startPlaying()
  {
    try {
      if (!('MediaSource' in window))
        throw new ReferenceError('There is no MediaSource property in window object.')
        var mime = 'audio/mpeg';
        if (!MediaSource.isTypeSupported(mime)) {
          alert('Can not play the media. Media of MIME type ' + mime + ' is not supported.');
          throw ('Media of type ' + mime +' is not supported.');
        }
      } catch (e) {
        console.log(e);
    }
    var audio=document.querySelector('audio')
    var audioUrl=this.audioUrl;
    console.log('audio url:',audioUrl)
    var mediaSource=new MediaSource()
    audio.src=URL.createObjectURL(mediaSource)
    mediaSource.addEventListener('sourceopen', function() {
      var sourceBuffer = this.addSourceBuffer(mime);
      //sourceBuffer.appendWindowEnd = 4.0;
      var xhr = new XMLHttpRequest;
      //xhr.open('GET', '../../../assets/mp3/sample.mp3');
      xhr.open('GET', audioUrl);
      
      //xhr.open('GET','https://samples.audible.com/bk/adbl/028625/bk_adbl_028625_sample.mp3');//not working because of cors
      xhr.responseType = 'arraybuffer';
      xhr.onload = function() {
          try {
              switch (this.status) {
                  case 200:
                    sourceBuffer.appendBuffer(this.response);
                    sourceBuffer.addEventListener('updateend', function (_){
                      mediaSource.endOfStream();
                  });
                    break;
                  case 404:
                    throw 'File Not Found';
                  default:
                    throw 'Failed to fetch the file';
             }
          } catch (e) {
            console.error(e);
          }
        };
        xhr.send();
    });

  }

}

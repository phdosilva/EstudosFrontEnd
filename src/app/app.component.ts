import { Component } from '@angular/core';
import { Photo } from './photos/photo/photo';
import { PhotoService } from './photos/photo/photo.service';
import { PhotosModule } from './photos/photos.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  photos: any[] = [];

  constructor(photoService: PhotoService) {
    photoService.listFromUser('flavio')
      .subscribe(photos => {
        this.photos = photos
      });
  }
}

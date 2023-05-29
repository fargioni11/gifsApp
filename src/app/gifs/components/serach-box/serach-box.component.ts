import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-serach-box',
  templateUrl: './serach-box.component.html',
})
export class SerachBoxComponent {
  @ViewChild('txtTagInput')  
  public tagInput!: ElementRef<HTMLInputElement>
 constructor( private gifsService: GifsService) {
   
 }

 searchTag() {
  const newTag = this.tagInput.nativeElement.value;
  this.gifsService.searchTags(newTag);
  this.tagInput.nativeElement.value = '';
 }
}

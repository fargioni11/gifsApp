import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'gifs-serach-box',
  templateUrl: './serach-box.component.html',
})
export class SerachBoxComponent {
  @ViewChild('txtTagInput')  
  public tagInput!: ElementRef<HTMLInputElement>
 constructor() {
   
 }

 searchTag() {
  const newTag = this.tagInput.nativeElement.value;
   console.log({newTag});
 }
}

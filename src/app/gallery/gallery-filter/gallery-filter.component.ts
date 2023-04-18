import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-filter',
  templateUrl: './gallery-filter.component.html',
  styleUrls: ['./gallery-filter.component.scss']
})
export class GalleryFilterComponent implements OnInit {

  @Input() data: Map<any, any> | undefined;


  ngOnInit(): void {
    console.log(this.data);
  }

  toogleShow(x: string) {
    var elemento = document.getElementsByClassName(x);
    for (var i = 0; i < elemento.length; i++) {
      if (elemento[i].className.includes(" show"))
        elemento[i].className = elemento[i].className.replace(" show", "");
      else elemento[i].className += " show";
    }
  }
}

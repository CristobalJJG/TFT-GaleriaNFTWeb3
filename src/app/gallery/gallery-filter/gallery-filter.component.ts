import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery-filter',
  templateUrl: './gallery-filter.component.html',
  styleUrls: ['./gallery-filter.component.scss']
})
export class GalleryFilterComponent {
  show: boolean = false;
  
  toogleShow() {
    this.show = !this.show;
  }

  /* filterFunction() {
    var input, filter, ul, li, a, i, div, txtValue;
    input = document.getElementById("myInput") as HTMLInputElement;
    filter = input.value.toUpperCase();
    div = document.getElementById("dropdown");
    console.log(div);
    
    a = div!.getElementsByTagName("label");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  } */
}

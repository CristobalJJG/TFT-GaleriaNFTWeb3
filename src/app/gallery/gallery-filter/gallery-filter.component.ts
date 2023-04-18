import {
  Component, EventEmitter,
  Input, OnInit, Output
} from '@angular/core';

@Component({
  selector: 'app-gallery-filter',
  templateUrl: './gallery-filter.component.html',
  styleUrls: ['./gallery-filter.component.scss']
})
export class GalleryFilterComponent implements OnInit {

  @Input() data: Map<any, any> | undefined;
  @Output() updateView = new EventEmitter<Map<string, string[]>>();
  activeFilters: Map<string, string[]> = new Map();

  ngOnInit(): void { }

  updateFilters(key: string, value: string) {
    if (this.activeFilters.has(key)) {
      var list = this.activeFilters.get(key);
      if (list) {
        if (list?.includes(value)) {
          list = list.filter((v) => v != value);
          this.activeFilters.set(key, list);

        } else {
          list!.push(value);
          this.activeFilters.set(key, list);
        }
      }

    } else this.activeFilters.set(key, [value]);
    this.updateView.emit(this.activeFilters)
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

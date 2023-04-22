import {
  Component, EventEmitter,
  Input, Output
} from '@angular/core';

@Component({
  selector: 'app-gallery-filter',
  templateUrl: './gallery-filter.component.html',
  styleUrls: ['./gallery-filter.component.scss']
})
export class GalleryFilterComponent {

  @Input() data: Map<any, any> | undefined;
  @Output() updateView = new EventEmitter<Map<string, string[]>>();
  activeFilters: Map<string, string[]> = new Map();

  updateFilters(key: string, value: string) {
    if (this.activeFilters.has(key)) {
      let list = this.activeFilters.get(key);
      if (list) {
        if (list?.includes(value)) {
          list = list.filter((v) => v != value);
          this.activeFilters.set(key, list);
        } else {
          list.push(value);
          this.activeFilters.set(key, list);
        }
      }

    } else this.activeFilters.set(key, [value]);
    this.updateView.emit(this.activeFilters)
  }

  toogleShow(x: string) {
    let elementos = document.getElementsByClassName(x);
    for (let i = 0; i < elementos.length; i++) {
      if (elementos[i].className.includes(" show"))
        elementos[i].className = elementos[i].className.replace(" show", "");
      else elementos[i].className += " show";
    }
  }
}

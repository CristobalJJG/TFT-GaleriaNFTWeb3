import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LogLevel } from 'alchemy-sdk/dist/src/util/logger';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  @Input() data: Map<any, any> | undefined;
  @Output() updateView = new EventEmitter<Map<string, string[]>>();
  activeFilters: Map<string, string[]> = new Map();

  updateFilters(key: string, value: string) {
    console.log(key, value);

    if (this.activeFilters.has(key)) {
      let list = this.activeFilters.get(key);
      if (list) {
        if (list.includes(value)) {
          list = list.filter((v) => v != value);
          this.activeFilters.set(key, list);
        } else if (value == '') {
          console.log(this.activeFilters);
          console.log(list);

          this.activeFilters.set(key, [value]);
          list = list.filter((v) => v != value);
          console.log(list);

          this.activeFilters.set(key, list);
        } else {
          list.push(value);
          this.activeFilters.set(key, list);
        }
      }
    } else this.activeFilters.set(key, [value]);
    console.log(this.activeFilters);

    this.updateView.emit(this.activeFilters)
  }

  clearFilter() {
    this.activeFilters.clear();
    this.updateFilters('Background', '')
    console.log(this.activeFilters);

    this.updateView.emit(this.activeFilters);
  }

  toogleShow(x: string) {
    let elementos = document.getElementsByClassName(x);
    for (let i = 0; i < elementos.length; i++) {
      elementos[i].classList.toggle("show");
    }
    let arrows1 = document.getElementsByClassName('arrow' + x + '1');
    let arrows2 = document.getElementsByClassName('arrow' + x + '2');
    for (let i = 0; i < elementos.length; i++) {
      arrows1[i].classList.toggle("hide");
      arrows2[i].classList.toggle("hide");
    }
  }

  toggleCollapse() {
    let elementos = document.getElementsByClassName('collapsable');
    for (let i = 0; i < elementos.length; i++) {
      elementos[i].classList.toggle("collapsed");
    }
  }
}

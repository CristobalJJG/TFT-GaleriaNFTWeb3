import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  @Input() data: Map<any, any> | undefined;
  @Output() updateView = new EventEmitter<Map<string, string[]>>();
  @Output() clearFilters = new EventEmitter<Map<string, string[]>>();
  activeFilters: Map<string, string[]> = new Map();

  updateFilters(key: string, value: string) {
    if (this.activeFilters.has(key)) {
      let values = this.activeFilters.get(key);
      if (values != undefined) {
        if (values.includes(value)) {
          values.splice(values.indexOf(value), 1);
          if (values.length == 0) {
            this.activeFilters.delete(key);
          }
        } else {
          values.push(value);
        }
      }
    } else {
      this.activeFilters.set(key, [value]);
    }
    this.updateView.emit(this.activeFilters);
  }


  clearFilter() {
    this.activeFilters.clear();
    this.updateView.emit(this.activeFilters);
    this.clearFilters.emit(this.activeFilters);
    let elementos = document.getElementsByClassName("checkbox");
    for (let e in elementos) {
      let aux = <HTMLInputElement>elementos[e];
      aux.checked = false;
    }
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
    let elementos = document.getElementsByClassName('filter');
    for (let i = 0; i < elementos.length; i++) {
      elementos[i].classList.toggle("collapsed");
    }

    let container = document.getElementsByClassName('app-filter-container');
    container[1].classList.toggle("maximized");
  }
}

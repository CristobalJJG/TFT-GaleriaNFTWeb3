import { SelectionModel } from '@angular/cdk/collections';
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Collection } from 'src/app/class/collection';
import { AdminService } from 'src/app/services/admin.service';
import { CollectionService } from 'src/app/services/collection.service';
import { ModalService } from 'src/app/services/modal.service';
import { AddCollectionModalComponent } from './add-collection-modal/add-collection-modal.component';

@Component({
  selector: 'app-collections-admin-panel',
  templateUrl: './collections-admin-panel.component.html',
  styleUrls: ['../panel.scss']
})
export class CollectionsAdminPanelComponent {
  collections: Collection[] = [];

  //Cosas para la tabla
  displayedColumns: string[] = ['select', 'Address', 'External-URL', 'name', 'pict'];
  dataSource = new MatTableDataSource<Collection>(this.collections);
  selection = new SelectionModel<Collection>(true, []);

  ngOnInit(): void {
    this.getAllCollections();
  }

  constructor(private admin: AdminService, private modal: ModalService) {
    this.modal.openDialog(AddCollectionModalComponent, "750px", "500px");
  }

  async getAllCollections() {
    await this.admin.getCollections().then((data) => {
      data.forEach((u: Collection) => { this.collections.push(u); })
    })
    this.dataSource = new MatTableDataSource<Collection>(this.collections);
  }

  applyFilter(filterValue: any) {
    this.dataSource.filter = filterValue.value.trim().toLowerCase();
  }

  openAddCollectionModal() {
    this.modal.openDialog(AddCollectionModalComponent, "750px", "500px");
  }

  /* APARTADO PARA SELECCIONAR MAS DE 1 COLECCION A LA VEZ */
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Collection): string {
    if (!row) { return `${this.isAllSelected() ? 'select' : 'deselect'} all`; }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.getName() + 1}`;
  }
  /* FIN APARTADO PARA LA SELECCION DE COLECCIONES*/



}

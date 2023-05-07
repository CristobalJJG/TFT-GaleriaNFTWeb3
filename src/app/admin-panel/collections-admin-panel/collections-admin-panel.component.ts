import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Collection } from 'src/app/class/collection';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-collections-admin-panel',
  templateUrl: './collections-admin-panel.component.html',
  styleUrls: ['../panel.scss']
})
export class CollectionsAdminPanelComponent {
  collections: Collection[] = [];

  //Cosas para la tabla
  displayedColumns: string[] = ['Address', 'External-URL', 'name', 'pict'];
  dataSource = new MatTableDataSource<Collection>(this.collections);

  ngOnInit(): void {
    this.getAllCollections();
    console.log(this.collections);
  }

  constructor(private admin: AdminService) {
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
}

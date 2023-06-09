import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/class/user';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-users-admin-panel',
  templateUrl: './users-admin-panel.component.html',
  styleUrls: ['../panel.scss']
})
export class UsersAdminPanelComponent implements OnInit {
  users: User[] = [];

  //Cosas para la tabla
  displayedColumns: string[] = [/* 'Username', */ 'Fullname', 'Email', 'Create_Date',
    'Last_Login', 'Phone', 'Wallets', 'IsAdmin'];
  dataSource = new MatTableDataSource<User>(this.users);

  ngOnInit(): void {
    this.getAllUsers();
  }

  constructor(private admin: AdminService) {
  }

  async getAllUsers() {
    await this.admin.getAllUsers().then((data) => {
      data.forEach((u: User) => { this.users.push(u); })
    })
    this.dataSource = new MatTableDataSource<User>(this.users);
  }

  getTime(time: Date) {
    let now = new Date(time).getTime();

    return new Date(now).toDateString();
  }

  applyFilter(filterValue: any) {
    this.dataSource.filter = filterValue.value.trim().toLowerCase();
  }
}

import { Component } from '@angular/core';
import { User } from '../class/user';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent {
  user: User | undefined;

  constructor(private router: Router, private route: ActivatedRoute) {
    let temp = localStorage.getItem("userData")

    if (temp != null) {
      console.log(JSON.parse(temp));
      let userdata = JSON.parse(temp);
      this.user = new User(userdata['create_date'],
        userdata['last_login'], userdata['email'], userdata['isAdmin'],
        userdata['name'], userdata['surname'], userdata['phone'],
        userdata['username'], userdata['wallets']);
    }
    this.isUserAdmin();
  }

  private isUserAdmin() {
    if (this.user == undefined || !this.user.getIsAdmin()) {
      this.navigate('login');
    } else {
      let url = window.location.href;
      this.navigate(url.split('/').pop() || 'users')
    }
  }

  protected navigate(route: string) {
    switch (route) {
      case "users": this.router.navigate(['users'], { relativeTo: this.route }); changeStyle("users"); break;
      case "collections": this.router.navigate(['collections'], { relativeTo: this.route }); changeStyle("collections"); break;
      //case "collections": this.router.navigate(['collections'], { relativeTo: this.route }); changeStyle("feedback"); break;
      case "login":
      default: this.router.navigate(['login']); break;
    }
  }

}

function changeStyle(id: string) {
  let elements = document.getElementsByClassName("active");
  for (let i = 0; i < elements.length; i++) {
    elements[i].classList.remove("active");
  }
  let element = document.getElementById(id);
  element?.classList.toggle("active");
}
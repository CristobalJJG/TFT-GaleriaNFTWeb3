import { Component } from '@angular/core';
import { User } from '../class/user';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth-service.service';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent {
  user: User | undefined;

  constructor(private router: Router, private route: ActivatedRoute, private admin: AdminService) {
    this.user = User.getUserFromData()
    this.isUserAdmin();
  }

  private isUserAdmin() {
    let username = this.user!.getEmail().split("@")[0] + "@" + this.user!.getName();

    !this.admin.verifyAdmin(username)
      .then((res) => {
        if (this.user == undefined || !res) {
          this.navigate('login');
        } else {
          let url = window.location.href;
          this.navigate(url.split('/').pop() || 'users')
        }
      })
  }

  protected navigate(route: string) {
    changeStyle(route);
    switch (route) {
      case "users": this.router.navigate(['users'], { relativeTo: this.route }); break;
      case "collections": this.router.navigate(['collections'], { relativeTo: this.route }); break;
      //case "feedback": this.router.navigate(['feedback'], { relativeTo: this.route }); break;
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
  element?.classList.add("active");
}

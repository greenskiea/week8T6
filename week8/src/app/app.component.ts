import { Component } from '@angular/core';
import { AuthService } from './auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'week8';
  constructor(private auth: AuthService) {}
  thoat() {
    this.auth.thoat();
  }

  daDangNhap() {
    return this.auth.daDangNhap();
  }

  chuaDangNhap() {
    return this.auth.chuaDangNhap();
  }
}

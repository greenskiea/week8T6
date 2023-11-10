import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DangNhapComponent } from './dang-nhap/dang-nhap.component';
import { DangKyComponent } from './dang-ky/dang-ky.component';
import { DoiPassComponent } from './doi-pass/doi-pass.component';
import { DownLoadComponent } from './down-load/down-load.component';
import { baoveGuard } from './baove.guard';

const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: '', component: DangNhapComponent },
  { path: 'dangky', component: DangKyComponent },
  { path: 'doipass', component: DoiPassComponent, canActivate: [baoveGuard] },
  { path: 'download', component: DownLoadComponent, canActivate: [baoveGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

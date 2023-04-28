import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PPesonnelLocationComponent } from './p-pesonnel-location/p-pesonnel-location.component';
import { LayoutComponent } from './p-coupon-policies/Layout/Layout.component';

const routes: Routes = [
  { path: '', redirectTo: '/config', pathMatch: 'full' },
  { path: 'config', component: LayoutComponent },
  { path: 'pessonnellocation', component: PPesonnelLocationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

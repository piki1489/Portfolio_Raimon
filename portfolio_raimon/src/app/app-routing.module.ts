import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { OverviewComponent } from './components/overview/overview.component';

const routes: Routes = [
  { path: '/overview', component: OverviewComponent },
  { path: '/overview', component: FooterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

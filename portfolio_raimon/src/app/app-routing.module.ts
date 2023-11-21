import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { OverviewComponent } from './components/overview/overview.component';
import { WorksComponent } from './components/works/works.component';

const routes: Routes = [
  { path: 'overview', component: OverviewComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'works', component: WorksComponent },
  { path: 'nav', component: NavComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

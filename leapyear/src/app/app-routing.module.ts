import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { AboutThisComponent } from './components/about-this/about-this.component';
import { LeapYearComponent } from './components/leapyear/leapyear.component';

const routes: Routes = [
  {
    path: '',
    component: LeapYearComponent,
  },
  { path: 'about-this-project', component: AboutThisComponent },
  { path: 'about-me', component: AboutMeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

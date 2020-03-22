import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColoredCircleTestComponent } from './colored-circle-test/colored-circle-test.component';


const routes: Routes = [
  { path: 'colored-circle', component: ColoredCircleTestComponent },
  { path: '', pathMatch: 'full', redirectTo: 'colored-circle' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

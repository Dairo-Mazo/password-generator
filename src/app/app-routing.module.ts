import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneratorPasswordComponent } from './container/generator-password/generator-password.component'

const routes: Routes = [{
  path: '', component: GeneratorPasswordComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

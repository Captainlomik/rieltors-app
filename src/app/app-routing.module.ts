import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsPageComponent } from './clients-page/clients-page.component';
import { ClientDetailPageComponent } from './client-detail-page/client-detail-page.component';

const routes: Routes = [
  {path:'clients', component:ClientsPageComponent}, 
  {path:'clients/:id', component:ClientDetailPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

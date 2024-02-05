import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsPageComponent } from './clients-page/clients-page.component';
import { ClientDetailPageComponent } from './client-detail-page/client-detail-page.component';
import { RieltorsPageComponent } from './rieltors-page/rieltors-page.component';
import { RieltorDetailPageComponent } from './rieltors-detail-page/rieltor-detail-page.component';

const routes: Routes = [
  { path: 'clients', component: ClientsPageComponent },
  { path: 'clients/:id', component: ClientDetailPageComponent },

  { path: 'rieltors', component: RieltorsPageComponent },
  { path: 'rieltors/:id', component: RieltorDetailPageComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsPageComponent } from './client/clients-page/clients-page.component';
import { ClientDetailPageComponent } from './client/client-detail-page/client-detail-page.component';
import { RieltorsPageComponent } from './rieltor/rieltors-page/rieltors-page.component';
import { RieltorDetailPageComponent } from './rieltor/rieltors-detail-page/rieltor-detail-page.component';
import { SalePageComponent } from './sale/sale-page/sale-page.component';
import { PurchaseComponent } from './purchase/purchase/purchase.component';

const routes: Routes = [
  { path: 'clients', component: ClientsPageComponent },
  { path: 'clients/:id', component: ClientDetailPageComponent },

  { path: 'rieltors', component: RieltorsPageComponent },
  { path: 'rieltor/:id', component: RieltorDetailPageComponent },

  { path: 'sale', component: SalePageComponent },
  { path: 'purchase', component: PurchaseComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

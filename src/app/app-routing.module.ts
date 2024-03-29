import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsPageComponent } from './client/clients-page/clients-page.component';
import { ClientDetailPageComponent } from './client/client-detail-page/client-detail-page.component';
import { RieltorsPageComponent } from './rieltor/rieltors-page/rieltors-page.component';
import { RieltorDetailPageComponent } from './rieltor/rieltors-detail-page/rieltor-detail-page.component';
import { SalePageComponent } from './sale/sale-page/sale-page.component';
import { PurchaseComponent } from './purchase/purchase/purchase.component';
import { PurchaseListComponent } from './purchase/purchase-list/purchase-list.component';
import { SaleListComponent } from './sale/sale-list/sale-list.component';

const routes: Routes = [
  { path: 'clients', component: ClientsPageComponent },
  { path: 'clients/:id', component: ClientDetailPageComponent },

  { path: 'rieltors', component: RieltorsPageComponent },
  { path: 'rieltor/:id', component: RieltorDetailPageComponent },

  { path: 'sale', component: SalePageComponent },
  { path: 'sales', component: SaleListComponent },

  { path: 'purchase', component: PurchaseComponent },
  { path: 'purchases', component: PurchaseListComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

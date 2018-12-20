import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllComponent } from './all/all.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { LightningFastDealComponent } from './lightning-fast-deal/lightning-fast-deal.component';
import { TrendingComponent } from './trending/trending.component';


const recipesRoutes: Routes = [
  {path:'product/all',component:AllComponent},
  {path:'product/detail',component:ProductDetailComponent},
  {path:'product/lightning',component:LightningFastDealComponent},
  {path:'product/trending',component:TrendingComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(recipesRoutes)
  ],
  exports: [RouterModule],
  providers: [

  ]
})
export class ProductRoutingModule {}

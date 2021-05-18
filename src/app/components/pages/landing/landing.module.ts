import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingComponent } from './landing.component';
import { LandingRoutingModule } from './landing-routing.module';
import { HeaderModule } from '../../shared/header/header.module';
import { SearchesModule } from '../../shared/searches/searches.module';

@NgModule({
  declarations: [
    LandingComponent,
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    HeaderModule,
    SearchesModule,
  ],
})
export class LandingModule { }

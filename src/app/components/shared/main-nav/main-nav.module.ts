import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';

import { MainNavComponent } from './main-nav.component';

@NgModule({
  declarations: [
    MainNavComponent,
  ],
  imports: [
    CommonModule,
    NgxBootstrapIconsModule.pick(allIcons),
    RouterModule,
  ],
  exports: [
    MainNavComponent,
  ],
})
export class MainNavModule { }

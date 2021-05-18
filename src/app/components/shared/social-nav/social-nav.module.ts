import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';

import { SocialNavComponent } from './social-nav.component';

@NgModule({
  declarations: [
    SocialNavComponent,
  ],
  imports: [
    CommonModule,
    NgxBootstrapIconsModule.pick(allIcons),
  ],
  exports: [
    SocialNavComponent,
  ],
})
export class SocialNavModule { }

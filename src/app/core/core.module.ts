import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { BaseService } from './http/base.service';
import { UtilityService } from './services/utilities.service'
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [HeaderComponent, FooterComponent],
  providers: [BaseService, UtilityService],
})
export class CoreModule { }

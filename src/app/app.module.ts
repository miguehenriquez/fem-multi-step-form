import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { LinkComponent } from './link/link.component';
import { SelectPlanComponent } from './select-plan/select-plan.component';
import { PickAddonsComponent } from './pick-addons/pick-addons.component';
import { FinishingUpComponent } from './finishing-up/finishing-up.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalInfoComponent,
    LinkComponent,
    SelectPlanComponent,
    PickAddonsComponent,
    FinishingUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

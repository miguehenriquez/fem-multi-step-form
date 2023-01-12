import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinishingUpComponent } from './finishing-up/finishing-up.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { PickAddonsComponent } from './pick-addons/pick-addons.component';
import { SelectPlanComponent } from './select-plan/select-plan.component';
import { ThankYouComponent } from './thank-you/thank-you.component';

const routes: Routes = [
  { path: '', redirectTo: 'personal-info', pathMatch: 'full' },
  {
    path: 'personal-info',
    title: 'personal info',
    component: PersonalInfoComponent,
  },
  { path: 'select-plan', title: 'select plan', component: SelectPlanComponent },
  { path: 'pick-addons', title: 'pick addons', component: PickAddonsComponent },
  {
    path: 'finishing-up',
    title: 'finishing up',
    component: FinishingUpComponent,
  },
  {
    path: 'thank-you',
    title: 'thank you',
    component: ThankYouComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

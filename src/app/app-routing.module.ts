import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ResearchDetailsComponent } from './pages/research-details/research-details.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'research/1', component: ResearchDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

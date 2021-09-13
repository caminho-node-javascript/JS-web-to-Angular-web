import { TermComponent } from './components/term/term.component';
import { ArticleComponent } from './components/article/article.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { LandingComponent } from './components/landing/landing.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   {path:'',component:LandingComponent},
   {path:'article',component:ArticleComponent},
   {path:'term',component:TermComponent},
   {path:'privacy',component:PrivacyPolicyComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

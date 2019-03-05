import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResumeComponent } from './resume/resume.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: "resume",
    component: ResumeComponent,
    data: { animation: 'isRight' }
  },
  {
    path: "portfolio",
    component: PortfolioComponent,
    data: { animation: 'isTop' }
  },
  {
    path: "blog",
    component: BlogComponent,
    data: { animation: 'isBottom' } 
  },
  {
    path: "contact",
    component: ContactComponent,
    data: { animation: 'isLeft' }
  },
  {
    path: "**",
    component: HomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

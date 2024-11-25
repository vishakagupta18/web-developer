import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServicePageComponent } from './service-page/service-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { BackOfficePageComponent } from './back-office-page/back-office-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', component: HomeComponent},
  { path: 'about-us', component: AboutUsComponent},
  { path: 'services', component: ServicePageComponent},
  { path: 'projects', component: ProjectsPageComponent},
  { path: 'contact-us', component: ContactPageComponent},
  { path: 'backOffice', component: BackOfficePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderModule } from './header/header.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule} from '@angular/material/card';
import { SliderContentComponent } from './slider-content/slider-content.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { ServicesComponent } from './services/services.component';
import { OurCompetenciesComponent } from './our-competencies/our-competencies.component';
import { ContactTeamComponent } from './contact-team/contact-team.component';
import { BrandIconsComponent } from './brand-icons/brand-icons.component';
import { MatOptionModule } from '@angular/material/core';
import { ServicePageComponent } from './service-page/service-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { BackOfficePageComponent } from './back-office-page/back-office-page.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ServiceInterceptor } from './service.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SliderContentComponent,
    HomeComponent,
    AboutUsComponent,
    OurServicesComponent,
    ServicesComponent,
    OurCompetenciesComponent,
    ContactTeamComponent,
    BrandIconsComponent,
    ServicePageComponent,
    ProjectsPageComponent,
    ContactPageComponent,
    BackOfficePageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HeaderModule,
    BrowserModule, 
    FormsModule, 
    ReactiveFormsModule,
    MatOptionModule,
    FlexLayoutModule, 
    BrowserAnimationsModule,
    MatIconModule, 
    MatButtonModule, 
    MatSidenavModule, 
    MatToolbarModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ServiceInterceptor, 
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { KonamiModule } from 'ngx-konami';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContainerComponent } from './container/container/container.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { StackComponent } from './stack/stack.component';
import { ProjectsComponent } from './projects/projects.component';
import { VouchComponent } from './vouch/vouch.component';
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from '@angular/material/button'
import { HttpClientModule } from '@angular/common/http';
import { VouchService } from './vouch/vouch.service';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    HomeComponent,
    AboutComponent,
    StackComponent,
    ProjectsComponent,
    VouchComponent,
    SplashScreenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    MatIconModule,
    FormsModule,
    KonamiModule
  ],
  providers: [VouchService],
  bootstrap: [AppComponent]
})
export class AppModule { }

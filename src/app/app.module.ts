import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from './../environments/environment';
import { FormComponent } from './form/form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule,MatNativeDateModule,MatFormFieldModule,MatDatepickerModule,MatExpansionModule,MatGridListModule,MatRadioModule,MatSidenavModule,MatToolbarModule,MatButtonModule,MatCardModule,MatTooltipModule,MatIconModule,MatBadgeModule,MatProgressSpinnerModule, MatInput } from '@angular/material';
import { NavbarsComponent } from './navbars/navbars.component';
import {FormsModule} from '@angular/forms';
import {RouterModule,Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
 import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
  import { NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';
import { AddbookComponent } from './addbook/addbook.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import {UserService} from './services/user.service';
import { HttpClientModule } from '@angular/common/http';

const appRoutes:Routes=[
  {
    path:'home',component:HomeComponent
  },
  {
    path:'signup',component:SignupComponent
  },
  {
    path:'addbook',component:AddbookComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    NavbarsComponent,
    HomeComponent,
    SignupComponent,
    AddbookComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    FormsModule,
     MatButtonModule,
     MatCardModule,
     MatTooltipModule,
     MatIconModule,
     MatBadgeModule,
     MatProgressSpinnerModule,
     MatToolbarModule,
     MatSidenavModule,
     RouterModule.forRoot(appRoutes),
     NgbModule,
     NgbCarouselModule,
     MatRadioModule,
    MatGridListModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MDBBootstrapModule.forRoot()
    //  NgTemplate,  
     
    //  NgbCarouselConfig,
    // NgbSlide
    
    // MatButtonToggleModule,
    // MatDatepickerModule,
    // MatFormFieldModule,
    // MatFormField
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from './../environments/environment';
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
import { HttpClientModule,HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { ShowBookComponent } from './show-book/show-book.component';
import { LogoutComponent } from './logout/logout.component';
import { FooterComponent } from './footer/footer.component';
import { Navbar2Component } from './navbar2/navbar2.component';
import { PhoneLoginComponent } from './phone-login/phone-login.component';
import { Window } from 'selenium-webdriver';
import { WindowService } from './services/window.service';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AdminComponent } from './admin/admin/admin.component';
import { HeaderComponent } from './admin/header/header.component';
import { StatsComponent } from './admin/stats/stats.component';
import { ShowBook2Component } from './show-book2/show-book2.component';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { TestComponent } from './test/test.component';
import {AuthGuard } from './auth.guard';

const appRoutes:Routes=[
  {
    path:'home',component:HomeComponent
  },
  {
    path:'signup',component:SignupComponent
  },
  {
    path:'addbook',component:AddbookComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'showBook',component:ShowBookComponent
  },
  {
    path:'logout',component:LogoutComponent
  },
  {
    path:'auth',component:PhoneLoginComponent
  },
  {
    path:'admin',component:AdminComponent
  },
  {
    path:'stats',component:StatsComponent
  },
  {
    path:'showbook',component:ShowBookComponent
  },
  {
    path:'test',component:TestComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarsComponent,
    HomeComponent,
    SignupComponent,
    AddbookComponent,
    LoginComponent,
    ShowBookComponent,
    LogoutComponent,
    FooterComponent,
    Navbar2Component,
    PhoneLoginComponent,
    AdminComponent,
    HeaderComponent,
    StatsComponent,
    ShowBook2Component,
    TestComponent
   
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
    AngularFirestoreModule.enablePersistence(),
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
    UserService,
    WindowService,
    AuthGuard
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass:TokenInterceptorService,
    //   multi:true
    // } 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

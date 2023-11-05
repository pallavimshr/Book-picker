import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule} from '@angular/material/button'
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatRippleModule} from '@angular/material/core';
import {MatChipsModule} from '@angular/material/chips';
import {MatProgressBarModule} from '@angular/material/progress-bar';

import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomepageComponent } from './homepage/homepage.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { GlobalVar } from './global-var';

import { environment } from '../environments/environment';
import * as firebase from 'firebase';
import { AuthService } from './services/auth.service';
import { BookInfoComponent } from './book-info/book-info.component';

import { HttpAuthInterceptor } from './http-auth.interceptor'
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { HttpClientModule } from '@angular/common/http';
import { SelectGenreComponent } from './select-genre/select-genre.component';
import { ProfileComponent } from './profile/profile.component';
import { LocationComponent } from './location/location.component';
import { AddBookComponent } from './add-book/add-book.component';
import { GlobalBooks } from './global-books';
import { MatDialogModule } from '@angular/material/dialog';
import { BookDialogComponent } from './book-dialog/book-dialog.component';
import { CommonModule } from '@angular/common';
import { MyBooksComponent } from './my-books/my-books.component';
import { ChatsComponent } from './chats/chats.component';
import { NotificationsComponent } from './notifications/notifications.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ChatComponent } from './chat/chat.component';
firebase.initializeApp(environment.firebaseConfig);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    SidenavComponent,
    BookInfoComponent,
    SelectGenreComponent,
    ProfileComponent,
    LocationComponent,
    AddBookComponent,
    BookDialogComponent,
    MyBooksComponent,
    ChatsComponent,
    NotificationsComponent,
    ChatComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireModule,
    AngularFirestoreModule,
    CommonModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    FormsModule,
    MatChipsModule,
    MatRippleModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatButtonModule,
    MatSelectModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [GlobalVar, AuthService, GlobalBooks,
  {   
    provide: HTTP_INTERCEPTORS,
    useClass: HttpAuthInterceptor,
    multi: true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

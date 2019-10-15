import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {  MatCheckboxModule,
          MatButtonModule,
          MatInputModule,
          MatCardModule, 
          MatIconModule,
          MatSnackBarModule,
} from '@angular/material';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    DragDropModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    MatSnackBarModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: '**', component: NotFoundComponent },
    ])
  ],
  providers: [
    {
      provide: 'apiUrl',
      useValue: 'https://api.limantech.com/todo'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

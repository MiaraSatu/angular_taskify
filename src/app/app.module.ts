import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthComponent } from './components/auth/auth.component';
import { LoginComponent } from './components/auth/login/login.component';
import { CreateComponent } from './components/auth/create/create.component';
import { HomeComponent } from './components/connected/home/home.component';
import { TaskComponent } from './components/connected/home/tasks/task/task.component';
import { TasksComponent } from './components/connected/home/tasks/tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LoginComponent,
    CreateComponent,
    HomeComponent,
    TaskComponent,
    TasksComponent,
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

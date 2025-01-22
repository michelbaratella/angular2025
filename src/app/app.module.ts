import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskComponent } from './tasks/task/task.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  /* Non-standalone components in declarations */
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  /* Standalone components in imports */
  imports: [
    BrowserModule,
    HeaderComponent,
    UserComponent,
    TasksComponent,
    TaskComponent,
  ],
})
export class AppModule {}

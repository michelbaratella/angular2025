import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NewTaskComponent } from './new-task/new-task.component';
import { TaskComponent } from './task/task.component';
import { TasksComponent } from './tasks.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [NewTaskComponent, TaskComponent, TasksComponent],
  // TasksComponent is the only component that has its selector called outside these module declarations (in app.component.html)
  exports: [TasksComponent],
  imports: [CommonModule, SharedModule, FormsModule],
})
export class TasksModule {}

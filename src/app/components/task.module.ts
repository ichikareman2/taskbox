import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { TasksState } from '../state/task.state';
import { TaskComponent } from './task/task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { PureTaskListComponent } from './pure-task-list/pure-task-list.component';



@NgModule({
  declarations: [TaskComponent, TaskListComponent, PureTaskListComponent],
  imports: [
    CommonModule,
    NgxsModule.forFeature([TasksState])
  ],
  exports: [TaskComponent, TaskListComponent]
})
export class TaskModule { }

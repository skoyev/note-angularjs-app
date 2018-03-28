import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { TaskComponent } from './task.component';
import { TaskRoutingModule } from './task-routing.module';
import { TaskService } from "../service/task.service";

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    TaskRoutingModule
  ],
  declarations: [
    TaskComponent
  ],
  providers: [
    TaskService
  ]
})
export class TaskModule { }

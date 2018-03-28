import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { TaskService } from "../service/task.service";
import { Task } from "../shared/model/task.model";

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  public isView:boolean = true;
  public task:Task = new Task('', '', [], '');

  constructor(private taskService: TaskService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.isView = params['name'].length > 0;
      if(this.isView) {
        this.task = this.taskService.findTaskByName(params['name']);
      }
    });
  }

  onSave(name:string, details:string, keywords:string, date:string){
    this.taskService.addNewTask(new Task(name, details, keywords.split(','), date));
    this.router.navigate(['home']);
  }

  onCancel(){
    this.router.navigate(['home']);
  }
}

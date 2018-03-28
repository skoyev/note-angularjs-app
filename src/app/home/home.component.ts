import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { TaskService } from "../service/task.service";
import { Task } from "../shared/model/task.model";
import { QuoteService } from './quote.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  quote: string;
  isLoading: boolean;
  tasks:Array<Task>;

  constructor(private quoteService: QuoteService,
              private taskService: TaskService,
              private router: Router) { }

  ngOnInit() {
    this.isLoading = true;
    this.tasks = this.taskService.tasks;
  }

  onView(task:Task){
    this.router.navigate(['task', task.name]);
  }

  onDelete(task:Task){
    this.taskService.deleteTaskByName(task.name);
  }

  onNewTask(){
    this.router.navigate(['task', '']);
  }

  onSearchTasks(keywords:string){
    this.tasks = keywords.length > 0 ? this.taskService.findTasksByKeywords(keywords.split(',')) :  this.taskService.tasks;
  }
}

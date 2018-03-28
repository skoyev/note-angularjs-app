import { Injectable } from '@angular/core';
import { Task } from '../shared/model/task.model';

@Injectable()
export class TaskService {
  public tasks: Array<Task> = [];

  constructor() {}

  /*
   * Create a new task.
   */
  addNewTask(task:Task){
    this.tasks.push(task)
  }

  /**
   * Delete task by name
   */
  deleteTaskByName(name:string){
    this.tasks.forEach( (item, index) => {
     if(item.name === name) this.tasks.splice(index,1);
    });
  }

  /**
   * Find tasks by keywords
   */
  findTasksByKeywords(keywords:Array<string>):Array<Task> {
      var res:Array<any> = [];
      keywords.forEach( (key, index) => {
        this.tasks.forEach((t) => {
          var hasTask:boolean = this.hasTaskKey(t, key.trim());
          if(hasTask)
             res.push(t);
        });
      });

      return res;
  }

  /**
   * Check if task contaons the keywords
   */
  hasTaskKey(t:Task, key:string):boolean {
    return t.keywords.some((k) => {
      return k.trim() == key;
    });
  }

  /**
   * Find task by name
   */
  findTaskByName(name:string){
    return this.tasks.find(t => t.name == name);
  }
}

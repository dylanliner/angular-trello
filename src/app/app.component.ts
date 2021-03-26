import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'trello-app';

  public toDos : Task[] = [{ 'title' : 'first task',
  'description' : 'triplebyte Task'
}];

  public underDevs : Task[] = [{ 'title' : 'first task',
  'description' : 'triplebyte Task'
}];

  public toTests : Task[] = [{ 'title' : 'first task',
  'description' : 'triplebyte Task'
}];


public moveToUnderDev(selectedTask:Task){
  this.toDos = this.toDos.filter(task =>task!==selectedTask);
  this.underDevs.push(selectedTask)
}

public moveToToTest(selectedTask:Task){
  this.underDevs = this.underDevs.filter(task =>task!==selectedTask);
  this.toTests.push(selectedTask)
}



}

export interface Task {
  title : string,
  description: string,
}

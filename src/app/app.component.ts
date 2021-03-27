import { Component } from '@angular/core';
import {Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public toDos : Task[] = [{ 'title' : 'first task',
  'description' : 'triplebyte Task'
}];

  public underDevs : Task[] = [{ 'title' : 'first task',
  'description' : 'triplebyte Task'
}];

  public toTests : Task[] = [{ 'title' : 'first task',
  'description' : 'triplebyte Task'
}];

constructor(private fb: FormBuilder) { }


profileForm = this.fb.group({
  title: ['', Validators.required],
  description: ['', Validators.required],
});

public moveToUnderDev(selectedTask:Task){
  this.toDos = this.toDos.filter(task =>task!==selectedTask);
  this.underDevs.push(selectedTask)
}

public moveToToTest(selectedTask:Task){
  this.underDevs = this.underDevs.filter(task =>task!==selectedTask);
  this.toTests.push(selectedTask)
}

onSubmit() {
  this.toDos.push({ 'title' : this.profileForm.get('title')?.value,
  'description' : this.profileForm.get('description')?.value
})
this.profileForm.reset()
  console.warn(this.profileForm.value);
}

}

export interface Task {
  title : string,
  description: string,
}

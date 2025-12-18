import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ITodo } from '../model/todoInterface';
@Component({
  selector: 'app-todo',
  imports: [FormsModule, CommonModule],
  templateUrl: './todo.html',
  styleUrl: './todo.css',
})

export class Todo implements OnInit {
  ngOnInit(): void {
    const istodoTaskName = localStorage.getItem("todoTaskName");
    if (istodoTaskName !== null) {
      this.taskList = JSON.parse(istodoTaskName)
    }
  }
  newTask = "";
  taskList: ITodo[] = [];
  addTask() {
    if(this.newTask!==""){
      this.taskList.push({ id: this.taskList.length + 1, task: this.newTask })
      localStorage.setItem("todoTaskName", JSON.stringify(this.taskList))
      this.newTask = "";
    }
    
  }
  deleteTask(id: number) {
    this.taskList = this.taskList.filter(res => res.id != id)
    localStorage.setItem("todoTaskName", JSON.stringify(this.taskList))
  }
}

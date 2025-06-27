import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'

//tasks interface
interface Task {
  id: number,
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-tasktracker',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './tasktracker.component.html',
  styleUrl: './tasktracker.component.css'
})

export class TasktrackerComponent {
  taskText = '';
  tasks: Task[] = [];
  filter: 'all' | 'active' | 'completed' = 'all';

  // add a new task
  addNewTask() {
    const title = this.taskText.trim();
    if(title) {
      this.tasks.push({
        id: Date.now(),
        title,
        completed: false,
      });
      this.taskText = '';
    }
  }

  // toggle tasks state
  toggleTask(task: Task) {
    task.completed = !task.completed;
  }

  // filter tasks
  setFilter(filter: 'all' | 'active' | 'completed') {
    this.filter = filter;
  }
  filteredTasks(): Task[] {
    if(this.filter === 'active'){
      return this.tasks.filter(task => !task.completed)
    } else if (this.filter === 'completed') {
      return this.tasks.filter(task => task.completed)
    }
    return this.tasks;
  }

  // remove a task
  deleteTask(id: number) {
    if(confirm('are you sure to delete this task?')) {
      this.tasks = this.tasks.filter(task => task.id !== id)
    }
  }
}

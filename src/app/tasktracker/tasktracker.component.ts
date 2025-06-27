import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'

interface Task {
  id: number,
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-tasktracker',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './tasktracker.component.html',
  styleUrl: './tasktracker.component.css'
})

export class TasktrackerComponent {

}

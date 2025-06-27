import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TasktrackerComponent } from './tasktracker/tasktracker.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TasktrackerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TaskTracker';
}

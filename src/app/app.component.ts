import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ScheduleTableComponent } from './schedule-table/schedule-table.component';
import { TableBasicExampleComponent } from './table-basic-example/table-basic-example.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ScheduleTableComponent, TableBasicExampleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-semester-scheduler';
}

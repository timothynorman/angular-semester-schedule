import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

export interface Week {
  number: number;
  dates: string;
  course1: string;
  course2: string;
  course3: string;
}

const SCHEDULE_DATA: Week[] = [
  {number: 1, dates: '6-13 May', course1: 'Assignment 1', course2: 'Project 1', course3: 'Quiz 1'},
  {number: 2, dates: '14-21 May', course1: 'Assignment 2', course2: 'Project 2', course3: 'Quiz 2'},
];

@Component({
  selector: 'app-schedule-table',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './schedule-table.component.html',
  styleUrl: './schedule-table.component.css'
})
export class ScheduleTableComponent {
  displayedColumns: string[] = ['number', 'dates', 'course1', 'course2', 'course3'];
  dataSource = SCHEDULE_DATA;
}

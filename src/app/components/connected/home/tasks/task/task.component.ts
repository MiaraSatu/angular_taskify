import { Component, OnInit, Input } from '@angular/core';
import { Itask } from 'src/app/data/Itask';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task?: Itask;

  constructor() { }

  ngOnInit(): void {
  }

}

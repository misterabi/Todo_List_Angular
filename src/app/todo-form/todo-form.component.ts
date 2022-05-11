import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent implements OnInit {
  inputValue: string = '';

  @Output()
  labelSubmitted: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  emitFormValue() {
    this.labelSubmitted.emit(this.inputValue);
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'board-button',
  templateUrl: './board-button.component.html',
  styleUrls: ['./board-button.component.css']
})
export class BoardButtonComponent {
  @Input() value = '';
  @Output() setBoxValue = new EventEmitter<void>();

  setValue(): void {
    this.setBoxValue.emit();
  }
}
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tic-tac-toe-angular';
  boxValues = new Array(9).fill(null);
  isX = true;
  winner=null;

  setValue(index: number): void {
    let value = '';
    if(this.isX){
      value= 'X';
    }else {
      value = 'O';
    }
    if(this.boxValues[index]==null && this.winner==null){
      this.boxValues[index] = value;
      this.isX = !this.isX;
      this.winner = this.checkWinner();
    }
  }

  checkWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (this.boxValues[a] && this.boxValues[a] === this.boxValues[b] && this.boxValues[b] === this.boxValues[c] && this.boxValues[a] === this.boxValues[c]) {
        return this.boxValues[a];
      }
    }
    return null;
  }

  resetGame(): void {
    this.boxValues = this.boxValues.map(value=>null);
    this.winner = null;
    this.isX = true;
  }
  
}

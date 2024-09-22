import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})
export class CalculatorComponent {

  display: string = '0';
  num1: number = 0;
  num2: number = 0;
  operator: string = '';
  previousInputs: string = '';

  displayValue(element: any) {
    if (this.display === '0') {
      this.display = element.textContent;
    } else {
      this.display += element.textContent;
    }
  }

  applyOperator(element: any) {
    this.num1 = parseInt(this.display);
    this.operator = element.textContent;
    this.previousInputs = `${this.display} ${element.textContent}`;
    this.display = '';
  }

  calculate() {
  this.num2 = parseInt(this.display);
  switch (this.operator) {
    case '+':
      this.display = `${this.num1 + this.num2}`;
      break;
    case '-':
      this.display = `${this.num1 - this.num2}`;
      break;
    case 'x':
      this.display = `${this.num1 * this.num2}`;
      break;
    case '/':
      if (this.num2 !== 0) {
        this.display = `${this.num1 / this.num2}`;
      } else {
        this.display = 'Error: Division by zero';
      }
      break;
    default:
      this.display = 'Error: Invalid operator';
  }
}

  clear() {
    this.display = '0';
  }
}


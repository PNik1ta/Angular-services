import { Injectable } from '@angular/core';

@Injectable()
export class LocalCounterService {
  public counter = 0;

  increase(): void {
    this.counter++;
  }

  decrease(): void {
    this.counter--;
  }
}

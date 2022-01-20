import { LogService } from './../services/log.service';
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class AppCounterService {
  public counter = 0;

  constructor(public logService: LogService) {

  }

  increase(): void {
    this.logService.log('Increase counter...');
    this.counter++;
  }

  decrease(): void {
    this.logService.log('Decrease counter...');
    this.counter--;
  }
}

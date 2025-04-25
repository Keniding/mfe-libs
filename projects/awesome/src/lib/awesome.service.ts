import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AwesomeService {

  constructor() { }

  sharedMessage = signal('Hello World!');
}

import { Component } from '@angular/core';
import { NgMetamaskService } from 'projects/ng-metamask/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'blockchainApp';
  constructor(private m: NgMetamaskService) {}
}

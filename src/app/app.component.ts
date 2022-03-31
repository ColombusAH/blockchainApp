import { Component } from '@angular/core';
import { NgMetamaskService } from '@ng-metamask';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'blockchainApp';
  constructor(private m: NgMetamaskService) {}
}

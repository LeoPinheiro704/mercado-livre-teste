import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'mercado-livre-teste';

  public searchCallback(value: string): void {
    // console.log(value);
  }


}

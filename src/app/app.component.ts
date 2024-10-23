import { Component } from '@angular/core';
import { TranslationService } from './service/translation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MoveApp';

  constructor(public translation: TranslationService){}
}

import {Component} from '@angular/core';

const ROOT_INDEX_HTML = 'app.component.html';
const ROOT_INDEX_CSS = 'app.component.scss';

@Component({
  selector: 'app-root-index',
  templateUrl: ROOT_INDEX_HTML,
  styleUrls: [ROOT_INDEX_CSS]
})
export class AppComponent {
  title = 'angular-state-management';
}

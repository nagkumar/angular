import {Component} from '@angular/core';
import {main} from "@angular/compiler-cli/src/main";

const PAGE_MAIN_INDEX = 'page-main-index';
const ROOT_INDEX_HTML = 'app.component.html';
const ROOT_INDEX_CSS = 'app.component.scss';

@Component({
  selector: PAGE_MAIN_INDEX,
  templateUrl: ROOT_INDEX_HTML,
  styleUrls: [ROOT_INDEX_CSS]
})
export class AppComponent {
  title = 'angular-state-management nag';
}

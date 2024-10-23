import { Component, OnInit } from '@angular/core';
import { transform } from 'lodash';
import { LanguagePipe } from '../pipe/language-pipe';
import { TranslationService } from '../service/translation.service';
import {TypeFormDialogComponent} from '../type-form-dialog/type-form-dialog.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public operatingSystem: any;




  constructor(public translation: TranslationService, public dialog: MatDialog) { }
  ngOnInit(): void {
    this.getOS();
  }

  getOS(): any {
    const userAgent = window.navigator.userAgent;
    const  platform = window.navigator.platform;
    const  macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K']
    const  windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'];
    const   iosPlatforms = ['iPhone', 'iPad', 'iPod'];
    let  os = null;

    if (macosPlatforms.indexOf(platform) !== -1) {
      os = 'Mac OS';
    } else if (iosPlatforms.indexOf(platform) !== -1) {
      os = 'iOS';
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
      os = 'Windows';
    } else if (/Android/.test(userAgent)) {
      os = 'Android';
    } else if (/Linux/.test(platform)) {
      os = 'Linux';
    }

    return this.operatingSystem = os;
  }

  // tslint:disable-next-line:typedef
   openDialog() {
     const dialogRef = this.dialog.open(TypeFormDialogComponent, {
      width: '100%',
      minHeight: '50vh',
      maxHeight: '70vh',
      });
  }
}

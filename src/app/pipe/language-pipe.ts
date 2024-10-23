import { Pipe, PipeTransform } from '@angular/core';
import {TranslationService} from '../service/translation.service';

@Pipe({
  name: 'language'
})
/**
 * This pipe converts uses TranslationService to convert string key
 * to currently selected language
 */
export class LanguagePipe implements PipeTransform {

  constructor(private service: TranslationService) {

  }

  transform(key: string): string {
    // console.log('Rcvd lang req', key);
    return this.service.getString(key) ? this.service.getString(key) : '';
  }

}


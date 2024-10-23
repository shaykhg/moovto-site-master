import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

/**
 * This service is used to load the language in the app,
 * it fetches the language file and make it available
 * depending on the chosen language
 */
export class TranslationService {

  public languages = [{name: 'English', value: 'en'}, {name: 'Finnish', value: 'fi'}];
  public ready = false;
  public lang = 'english';
  private translations: any;

  constructor( private http: HttpClient) {
    this.init();
  }

  /**
   * This function can be called to find any word in current language
   * @param key is the key of the word
   */
  public getString(key: any): any {
     // console.log('Key', key, this.translations);
     return this.translations ? this.translations[key] : '';
  }

  /**
   * This function is supposed to be called when language is changed
   * @param code is the language code e.g en (English),es(Spanish),ar(Arabic)
   */
  public changeLanguage(code: string): any {
    this.ready = false;
    this.lang = code;
    // console.log('Lang is change', code);
    // this.storage.setString('lang', code);
    localStorage.setItem('lang', code);
    this.loadLang();
  }

  private async init(): Promise<any> {
    // @ts-ignore
    this.lang = await localStorage.getItem('lang');
    // this.lang = await this.storage.getValue('lang');
    // console.log('Stored lang is ', this.lang);
    this.lang = this.lang || 'en';
    this.loadLang();
  }

  public getLang(): any{
    // console.log(this.lang);
    return this.lang;
  }

  /**
   * This function loads the language file and set the contents
   * to local private object, it uses lang variable to identify
   * chosen language
   */
  private loadLang(): any {
    // this.http.get<any>(../assets/json/${this.lang}.json).subscribe(data => {
    this.http.get<any>(`../assets/json/${this.lang}.json`).subscribe(data => {
      console.log('Lang', data);
      console.log(data);
      this.translations = data;
      this.ready = true;
    }, error => {
      console.log('Unable to load translations', error);
      this.ready = true;
    });
  }
}

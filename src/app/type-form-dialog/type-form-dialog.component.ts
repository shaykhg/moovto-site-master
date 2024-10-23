import {AfterViewInit, Component, Inject, OnInit, Renderer2} from '@angular/core';
import { createWidget } from '@typeform/embed';
import '@typeform/embed/build/css/widget.css';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-type-form-dialog',
  templateUrl: './type-form-dialog.component.html',
  styleUrls: ['./type-form-dialog.component.scss']
})
export class TypeFormDialogComponent implements OnInit, AfterViewInit {

  constructor(private renderer: Renderer2, @Inject(DOCUMENT) private document: HTMLDocument) { }

  ngOnInit(): void {

  }


  ngAfterViewInit(): void {
    setTimeout(() => {
      // @ts-ignore
      createWidget('FUFyZdpT', { container: document.querySelector('#form'), width: 600, height: 600, } );
      console.log('Called fun');
    }, 300);

    setTimeout(() => {
      const items = this.document.querySelectorAll('iframe');
      console.log('items', items);
      this.renderer.setStyle(items.item(0), 'width', '600px');
    }, 300);


  }


}

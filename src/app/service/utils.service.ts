import {Injectable} from '@angular/core';
import * as _ from 'lodash';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor( private snackBar: MatSnackBar, public dialog: MatDialog) { }




  /**
   * Display a snack bar
   * @param msg Message to be displayed
   * @param duration Duration of message, how long it should be on screen
   */
  public presentSnackBar(msg: string, duration = 2000): void {
    // @ts-ignore
    this.snackBar.open(msg, null, {
      duration
    });
  }



  public getIndianDate(date: moment.MomentInput): string {
    return moment(date).format('DD-MMM-YYYY');
  }

  /**
   * Get date in this format :: 24th May 2018, 02:54 PM
   * @param date Date with time
   */
  public getHumanDateTime(date: moment.MomentInput): string {
    return moment(date).format('MMMM Do YYYY, h:mm a');
  }




  // displayLoading(){
  //
  // }





}

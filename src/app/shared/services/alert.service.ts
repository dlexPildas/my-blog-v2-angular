import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(
    private snackBar: MatSnackBar,
  ) { }

  alertError(message: string): void {
    this.snackBar.open(message, '😢',
      {
        duration: 5000,
        horizontalPosition: 'right',
        verticalPosition: 'top',
      })
  }
}

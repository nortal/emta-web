import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uig',
  templateUrl: './uig.component.html'
})
export class UigComponent {
  public lego: any = {
    text2: 'наушники'
  };

  public alert(txt) {
    window.alert(txt);
  }
}

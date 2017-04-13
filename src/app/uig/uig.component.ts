import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uig',
  templateUrl: './uig.component.html'
})
export class UigComponent {
}


@Component({
  selector: 'app-uig-04',
  templateUrl: './uig.04.buttons.component.html'
})
export class UigButtonsComponent {
  public alert(txt) {
    window.alert(txt);
  }
}

@Component({
  selector: 'app-uig-05',
  templateUrl: './uig.05.links.component.html'
})
export class UigLinksComponent {
}

@Component({
  selector: 'app-uig-06',
  templateUrl: './uig.06.icons.component.html'
})
export class UigIconsComponent {
}


@Component({
  selector: 'app-uig-10',
  templateUrl: './uig.10.badge.component.html'
})
export class UigBadgeComponent {
}

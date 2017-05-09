import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'page-header',
  templateUrl: './page-header.component.html'
})

export class PageHeaderComponent {
  public pageHeaderCode: String = 'FIDEK';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  public ngOnInit() {
    this.pageHeaderCode = 'pageHeader.' + 'ljs';
    // vaja kätte saadat current path element
    // this.activatedRoute.pathFromRoot.switchMap((url: ActivatedRoute[]) => console.log(url)).subscribe();
  }

}

import {
  Component,
  OnInit
} from '@angular/core';
import {Router, Routes} from '@angular/router';

@Component({
  selector: 'trail',
  templateUrl: './trail.component.html'
})

export class TrailComponent implements OnInit {
  public trails: Routes;

  constructor(private router: Router) {
  }

  public ngOnInit() {
    this.trails = this.router.config;
  }

}

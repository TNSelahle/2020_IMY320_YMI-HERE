import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.content = this.router.getCurrentNavigation().extras.state;
  }

  content: any;
  public show = false;
  public opened = false;

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  toggleVideo() {
    this.opened = true;
    this.show = !this.show;
  }

  // tslint:disable-next-line:typedef
  closeVideo() {
    if (this.opened) {
      this.show = false;
      this.opened = false;
    }
  }
}

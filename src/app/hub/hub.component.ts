import { Component, OnInit } from '@angular/core';
import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-hub',
  templateUrl: './hub.component.html',
  styleUrls: ['./hub.component.css']
})
export class HubComponent implements OnInit {
  contentArray: any;

  constructor(private contentService: ContentService) { }

  // tslint:disable-next-line:typedef
  getContent(): any {
    this.contentService.getContent().subscribe(content => {
      this.contentArray = content;
    });
  }

  ngOnInit(): void {
    this.getContent();
  }

}

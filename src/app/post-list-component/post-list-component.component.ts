import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {

    @Input() title: string;
    @Input() contents: string;
    @Input() loveIts: string;
    @Input() dontLoveIts: string;
    @Input() created_at: Date;
  constructor() {
    this.created_at = new Date();
  }

  ngOnInit() {
  }

 onLoveIt() {
     return this.loveIts = this.loveIts + 1;
 }
 onDontLoveIt() {
     return this.dontLoveIts = this.dontLoveIts + 1;
 }

}

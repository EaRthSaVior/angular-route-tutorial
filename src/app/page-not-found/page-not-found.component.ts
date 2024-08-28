import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.css',
})
export class PageNotFoundComponent implements OnInit {
  data: string;

  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.data = this.route.snapshot.data['message'];
  }
}

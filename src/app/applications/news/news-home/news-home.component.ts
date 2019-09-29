import { Component, OnInit } from '@angular/core';
import { NewsServiceService } from '../news.service';

@Component({
  selector: 'app-news-home',
  templateUrl: './news-home.component.html',
  styleUrls: ['./news-home.component.scss']
})
export class NewsHomeComponent implements OnInit {

  newsItems;

  constructor(
    private newsService: NewsServiceService
  ) { }

  ngOnInit() {
    this.newsService.getNews().subscribe( data => {
      console.log(data);
      this.newsItems = data;
    });
  }

  openLink(link) {
    window.open(link);
  }

}

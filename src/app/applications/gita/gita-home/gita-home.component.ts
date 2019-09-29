import { Component, OnInit } from '@angular/core';
import { GitaService } from '../gita.service';

@Component({
  selector: 'app-gita-home',
  templateUrl: './gita-home.component.html',
  styleUrls: ['./gita-home.component.scss']
})
export class GitaHomeComponent implements OnInit {
  chapters;

  constructor(
    private gitaService: GitaService
  ) {

   }

  ngOnInit() {

  }

  getChapters() {
    this.gitaService.getChapters().subscribe(chapters => {
      this.chapters = chapters;
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { MessagingService } from './shared/messaging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'g2apps';

  constructor(
    private messagingService: MessagingService
  ) {  }

  ngOnInit() {
    const userId = 'user001';
    this.messagingService.requestPermission(userId);
    this.messagingService.receiveMessage();
  }
}

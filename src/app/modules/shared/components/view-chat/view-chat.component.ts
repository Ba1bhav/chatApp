import { Component } from '@angular/core';
import { messages } from 'src/assets/roomchat';
@Component({
  selector: 'app-view-chat',
  templateUrl: './view-chat.component.html',
  styleUrls: ['./view-chat.component.css']
})
export class ViewChatComponent {
 messages=messages
}

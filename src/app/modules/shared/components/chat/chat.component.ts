import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ViewChatComponent } from '../view-chat/view-chat.component';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  chatForm:FormGroup;
constructor(private formBuilder:FormBuilder){
  this.chatForm=formBuilder.group(
    {
      message:['',Validators.required]
    }
  )
}
out(){
  console.log(this.chatForm)
}
}

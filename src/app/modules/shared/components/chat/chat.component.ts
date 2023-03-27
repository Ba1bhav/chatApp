import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { messages } from 'src/assets/roomchat';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  messages=messages;
  chatForm:FormGroup;
constructor(private formBuilder:FormBuilder){
  this.chatForm=formBuilder.group(
    {
      message:['',Validators.required],
      owner:['baibhav',[]]
    }
  )
}
out(){
  console.log(this.chatForm)
  messages.push(this.chatForm.value)
  this.chatForm.reset()
}
}

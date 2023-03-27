import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './modules/shared/components/chat/chat.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { UserDetailsComponent } from './modules/shared/components/user-details/user-details.component';

const routes: Routes = [
  {path:'chats',component:ChatComponent},
  {path:'userDetails',component:UserDetailsComponent},
  {path:'',component:LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

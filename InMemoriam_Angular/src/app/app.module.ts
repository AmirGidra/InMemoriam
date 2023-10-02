import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserRegisterComponent } from './Components/Users/user-register/user-register.component';
import { UserSignInComponent } from './Components/Users/user-sign-in/user-sign-in.component';
import { CreateMemoryComponent } from './Components/Memories/create-memory/create-memory.component';
import { ReadMemoryComponent } from './Components/Memories/read-memory/read-memory.component';
import { ImageComponent } from './Components/Media/image/image.component';
import { VideoComponent } from './Components/Media/video/video.component';
import { NavBarComponent } from './Components/Common/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    UserRegisterComponent,
    UserSignInComponent,
    CreateMemoryComponent,
    ReadMemoryComponent,
    ImageComponent,
    VideoComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserService } from './user/user.service';
import { UserFormComponent } from './components/user-form/user-form.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import {RouterModule} from '@angular/router';
import { FilterPipeComponent } from './filter-pipe/filter-pipe.component';
import { BgcolorDirective } from './bgcolor.directive';
import { ReactiveComponent } from './reactive/reactive.component';
import { DataTableComponent } from './data-table/data-table.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserFormComponent,
    HeaderComponent,
    FilterPipeComponent,
    BgcolorDirective,
    ReactiveComponent,
    DataTableComponent
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule,
    RouterModule.forChild([
      {path:'form',component:UserFormComponent},
      {path:'reactive',component:ReactiveComponent}
    ])
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

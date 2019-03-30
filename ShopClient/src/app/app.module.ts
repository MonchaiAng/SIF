import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { routing } from './app.routes';
import { UserloginComponent } from './userlogin/userlogin.component';
import { RestHandlerService } from './services.service';
import { RegisterComponent } from './register/register.component';
import { BackpackComponent } from './product/backpack/backpack.component';
import { CapComponent } from './product/cap/cap.component';
import { CarryBagComponent } from './product/carry-bag/carry-bag.component';
import { IDCardCaseComponent } from './product/idcard-case/idcard-case.component';
import { NotebookComponent } from './product/notebook/notebook.component';
import { PouchComponent } from './product/pouch/pouch.component';
import { SockComponent } from './product/sock/sock.component';
import { StickyNoteComponent } from './product/sticky-note/sticky-note.component';
import { StorageBoxComponent } from './product/storage-box/storage-box.component';
import { SearchComponent } from './search/search.component';
import { CompanyComponent } from './company/company.component';
import { DepartmentComponent } from './department/department.component';
import { MatchComponent } from './match/match.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    UserloginComponent,
    RegisterComponent,
    BackpackComponent,
    CapComponent,
    CarryBagComponent,
    IDCardCaseComponent,
    NotebookComponent,
    PouchComponent,
    SockComponent,
    StickyNoteComponent,
    StorageBoxComponent,
    SearchComponent,
    CompanyComponent,
    DepartmentComponent,
    MatchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    routing
  ],
  providers: [RestHandlerService],
  bootstrap: [AppComponent]
})
export class AppModule { }

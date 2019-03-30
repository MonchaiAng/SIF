import { Router,RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserloginComponent } from './userlogin/userlogin.component';
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

const routes : Routes = [
    {path:'',component : LoginComponent},
    {path:'home',component : HomeComponent},
    {path:'userLogin',component : UserloginComponent},
    {path:'registerLogin',component : RegisterComponent},
    {path:'backpack',component : BackpackComponent},
    {path:'cap',component : CapComponent},
    {path:'carrybag',component : CarryBagComponent},
    {path:'idcardcase',component : IDCardCaseComponent},
    {path:'notebook',component : NotebookComponent},
    {path:'pouch',component : PouchComponent},
    {path:'sock',component : SockComponent},
    {path:'stickynote',component : StickyNoteComponent},
    {path:'storagebox',component : StorageBoxComponent},
    {path:'search',component : SearchComponent},
    {path:'company',component : CompanyComponent},
    {path:'department',component : DepartmentComponent},
    {path:'match',component : MatchComponent}
]

export const routing = RouterModule.forRoot(routes); 
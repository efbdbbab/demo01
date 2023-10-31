import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "../login/ts/login.component";
import {RegComponent} from "../login/ts/reg.component";
import {ForgotPwdComponent} from "../login/ts/forgotPwd.component";
import {LoginInfoComponent} from "../login/ts/loginInfo.component";
import {HomeComponent} from "../login/ts/home.component";

const routes: Routes = [
  //配置路由
  {
    path: '', // 当没有匹配的路径时，重定向到 '/home'
    redirectTo: 'home',
    pathMatch: 'full' // 设置为 'full' 表示完全匹配
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'reg',component:RegComponent
  },
  {
    path:'forgotPwd',component:ForgotPwdComponent
  },
  {
    path:'loginInfo',component:LoginInfoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import {Component, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector:'app-loginInfo',
  templateUrl:'../html/loginInfo.component.html',
  styleUrls:['../css/login.component.css']
})
export class LoginInfoComponent implements OnInit{
  userInfo: any;

  //處理路由信息
  constructor(private route:ActivatedRoute) {
  }
  //當組件被創建時(初始化)會自動調用的方法
  ngOnInit(): void {
    //用ActivatedRoute服務來監聽URL參數變化，當有參數傳遞時，這代碼快會執行
    this.route.queryParams.subscribe((params)=>{
      //判斷有無參數
      if(params['user']){
        try {
          const data =  JSON.parse(params['user']);
          this.userInfo=data;
        }catch (error){
         console.error('fail',error);
        }
      }
    })
  }
}

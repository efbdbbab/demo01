import {Component} from "@angular/core";
import {FormBuilder, FormGroup, Validators, FormsModule } from "@angular/forms";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: '../html/login.component.html',
  styleUrls: ['../css/login.component.css']
})

export class LoginComponent {
  //密碼隱藏的變量設置
  hide: any;
  //聲明ruleForm的FormGroup對象，用於處理表單狀態和驗證
  ruleForm: FormGroup;


  //在構造方法中創建ruleForm並指定表單字段以及相應的驗證規則
  constructor(private formBuilder: FormBuilder, private router: Router, private http:HttpClient, private snackBar: MatSnackBar) {
    // 在构造函数中创建ruleForm并分配初始值
    this.ruleForm = this.formBuilder.group({
      username: ['root', [Validators.required]],
      password: ['123456', [Validators.required]]
    });
  }

  /**
   * 登入方法
   */
  submitForm() {
    //判斷傳入的參數是否合法
    if (this.ruleForm.valid) {
      const url = 'http://localhost:9181/User/login';
      const formData = this.ruleForm.value;
      console.log('參數: '+formData.username+formData.password)
      console.log('參數: '+JSON.stringify(formData))

      /**
       * 使用Angular內建的HttpClient發起請求
       */
      this.http.post(url, formData).subscribe((response: any) => {
        // 處理登陸成功之後的邏輯
        if (response.state === 20000) {
          let user = response.data;
          //設置提示視窗的樣式
          this.snackBar.open('login success','close',{
            duration:3000,//顯示時長
            panelClass:'success-snackbar'//可自定義樣式
          });
          //保存登錄的使用者資訊至本地緩存
          // localStorage.setItem('user',JSON.stringify(user));
          console.log('localstorage: '+JSON.stringify(user));
          //成功之後頁面跳轉至loginInfo頁面
          this.router.navigate(['/loginInfo'],{queryParams:{user:JSON.stringify(user)}})
        } else {
          // 處理登陸失敗的邏輯
          this.snackBar.open('login fail','close',{
            duration:3000,//顯示時長
            panelClass:'error-snackbar'//可自定義樣式
          })
        }
      }, (error) => {
        console.error('登陸請求失敗', error);
      });
    }
  }
}

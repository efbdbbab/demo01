import {Component} from "@angular/core";
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";
import {catchError, map, Observable, of, tap} from "rxjs";

@Component({
  selector:'app-reg',
  templateUrl:'../html/reg.component.html',
  styleUrls:['../css/login.component.css']
})
export class RegComponent {
  //密碼隱藏的變量設置
  hide: any;
  //聲明ruleForm的FormGroup對象，用於處理表單狀態和驗證
  ruleForm: FormGroup;
  usernameControl: FormControl;
  usernameExist = false;



  //在構造方法中創建ruleForm並指定表單字段以及相應的驗證規則
  constructor(private formBuilder:FormBuilder,private router: Router, private http:HttpClient, private snackBar: MatSnackBar) {
    //創建檢查用戶名的構造方法
    this.usernameControl = new FormControl('', Validators.required);
    //在构造函数中创建ruleForm并分配初始值
    this.ruleForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      email: ['efbdbbab@gmail.com', [Validators.required]]
    });
  }

  /**
   * 異步調用檢查註冊名是否重複
   */
  checkUsername() {
    const usernameControl = this.ruleForm.get('username');
    if (usernameControl) {
      const username = usernameControl.value.trim();
        console.log('開始檢查!: ' + username);
      if (username !== '') {
        this.http.get(`http://localhost:9181/User/username?username=${username}`)
          .subscribe((response: any) => {

            if (response.state !== 20000) {
              this.snackBar.open('用戶名已存在', '關閉', {
                duration: 3000,
                panelClass: ['error-snackbar']
              });
              this.usernameExist = true;
            } else {
              this.snackBar.open('用戶名可用', '關閉', {
                duration: 3000,
                panelClass: ['success-snackbar']
              });
              this.usernameExist = false;
            }
          }, (error) => {
            console.error('檢查用戶名請求失敗', error);
            // 在请求失败时打开适当的消息框
            this.snackBar.open('檢查用戶名請求失敗', '關閉', {
              duration: 3000,
              panelClass: 'error-snackbar'
            });
          });
      }
    }
  }


  /**
   * 註冊方法
   */
  submitForm(){
    if(this.ruleForm.valid && !this.usernameExist) {
      const url = 'http://localhost:9181/User/register';
      const formData = this.ruleForm.value;

      //發送post請求
      this.http.post(url, formData).subscribe((response: any) => {
        if (response.state == 20000) {
          let user = response.data;

          this.snackBar.open('reg success', 'close', {
            duration: 3000,
            panelClass: 'success-snackbar'//可自定義樣式
          })
          //註冊成功跳轉至登入頁面
          this.router.navigate(['/login']);
        } else {
          this.snackBar.open('reg fail', 'close', {
            duration: 3000,
            panelClass: 'error-snackbar'//可自定義樣式
          })
        }
      }, (error) => {
        console.error('註冊請求失敗', error);
      });
    }
  }
}

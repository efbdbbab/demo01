import {Component} from "@angular/core";
import {FormFieldOverviewExample} from "./FormField";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector:'app-forgotPwd',
  templateUrl:'../html/forgotPwd.component.html',
  styleUrls:['../css/login.component.css']
})
export class ForgotPwdComponent {
  ruleForm: FormGroup;

  constructor(private formBuilder:FormBuilder,private router: Router, private http:HttpClient, private snackBar: MatSnackBar) {
    // 在构造函数中创建ruleForm并分配初始值
    this.ruleForm = this.formBuilder.group({
      username: ['', [Validators.required]],
    });
  }

  /**
   * 找回密碼方法
   */
  submitForm(){
    if(this.ruleForm.valid) {
      const url = 'http://localhost:9181/User/password';
      const data = this.ruleForm.value;
      this.http.post(url, data).subscribe((response: any) => {
        if (response.state == 20000) {
          this.snackBar.open('find password success', 'close', {
            duration: 3000,
            panelClass: 'success-snackbar'//可自定義樣式
          })
          this.router.navigate(['/login']);
        } else {
          this.snackBar.open('find password fail', 'close', {
            duration: 3000,
            panelClass: 'error-snackbar'//可自定義樣式
          })
        }
      }, error => {
        console.error('找回密碼請求失敗', error);
      })
    }
  }
}

import {Component} from "@angular/core";
//component = template + script + style

/**
 * 1.創建組件class
 */
//裝飾器(Decorator)--用於指定class的用途
@Component({
  template: '<h2>my component01</h2><hr>',
  selector: 'myc01'
})
export class Myc01Component {

}

/**
 * 2.在某個模塊中註冊組件class
 */

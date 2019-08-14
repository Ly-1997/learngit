// es6 module
// 项目入口文件
// import App from './common'
import Vue from './vue.min'
// import {num,num2,add} from './common'
// console.log(num,num2);
// add(num,num2)

// 整体导入
import * as objs from './common'
console.log(objs.num2,objs.add(4,5,6));

new Vue({
    el: '#app',
    components: {
        // App
        App: objs.default
    },
    template: '<App />'
}); 
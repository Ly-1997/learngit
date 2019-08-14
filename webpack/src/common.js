var app={
    template: '<div>这是一个入口组件，改动改动改动</div>'
};
export var num=1;   //声明并导出，作为一整个对象key导出
var num2=2;
export {num2};    //    声明再导出
export function add(x,y) {
    return x+y;
}
export default app; //抛出app
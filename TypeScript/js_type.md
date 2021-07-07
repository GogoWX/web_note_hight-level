# JavaScript自有类型系统的问题
JavaScript自有类型系统是弱类型且动态类型的，基本无任何类型限制，灵活但不靠谱；

### JavaScript弱类型产生的问题
- 类型异常需等到代码执行才会报错；
```
const obj = {};
setTimeout(() => {
    console.log(obj.foo())
},100000)
```
- 类型不明确，会造成函数功能的改变
```
function sum(a,b) {
    return a + b
}
console.log(sum(100,100));//200
console.log(sum(100,'100'));//100100
```
### 强类型的优势

- 错误提前暴露；在编码阶段便能发现问题，不必在运行阶段才发现问题；
- 代码更智能，编码更准确；强类型语言，编辑器会实时智能提示代码，而不会因为无法确认类型而无法知道该提示什么；
- 重构更牢靠；修改/删除被多处应用的变量、属性、类时，强类型语言在重新编译时就会立即报出错误，方便定位与修改问题；
- 减少不必要的类型判断：不必在接收参数的函数内部进行参数类型判断。
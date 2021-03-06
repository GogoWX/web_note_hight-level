//once 只执行一次的函数
function once(fn) {
    let done = false;
    return function () {
        if (!done) {
            done = true;
            return fn.apply(this, arguments)
        }
    }
}
//测试
let pay = once(function (money) {
    console.log(`once：支付 ${money} RMB`)
})
pay(5)
pay(5)
pay(5)
pay(5)
pay(5)

// 数组方法的高阶函数实现 开始

//filter过滤的实现
function filter(array, fn) {
    let results = [];
    for (let i = 0; i < array.length; i++) {
        if (fn(array[i])) {
            results.push(array[i])
        }
    }
    return results;
} //测试 let
arr = [1, 3, 4, 6, 7, 8];
let r = filter(arr, function (item) {
    return item % 2 === 0
})
console.log('filter：', r)
//map 对数组中的每个元素进行操作， 并返回一个新的数组
const map = (array, fn) => {
    let results = [];
    for (let value of array) {
        results.push(fn(value))
    }
    return results;
}
//测试
let arrM = [1, 4, 5, 2, 8];
arrM = map(arrM, v => v * v);
console.log('map：', arrM)

//every 数组中的每个元素是否都匹配相应条件
const every = (array, fn) => {
    let results = true;
    for (let value of array) {
        results = fn(value)
        if (!results) {
            break;
        }
    }
    return results;
}
//测试
let arrE = [11, 13, 16];
let er = every(arrE, v => v > 10);
console.log('every：', er)

//some 检测数组中的元素 有至少一个符合条件
const some = (array, fn) => {
    let results = false;
    for (let value of array) {
        results = fn(value)
        if (results) {
            break;
        }
    }
    return results;
}
//测试
let arrS = [8, 9, 7];
let sr = some(arrS, v => v > 10);
console.log('some：', sr);

// 数组方法的高阶函数实现 结束
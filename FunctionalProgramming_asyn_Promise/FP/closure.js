//求幂
function makePower(power) {
    return function (num) {
        return Math.pow(num, power)
    }
}
let power2 = makePower(2);
let power3 = makePower(3);
let power4 = makePower(4);
//测试
console.log('幂值：', power3(3))

//计算不同级别工资
function makeSalary(base) {
    let baseNum = 0;
    switch (base) {
        case 1:
            baseNum = 12000;
            break;
        case 2:
            baseNum = 15000;
            break;
        case 3:
            baseNum = 20000;
            break;
        default:
            baseNum = 12000;
            break;
    }
    return function (performance) {
        return performance + baseNum;
    }
}

let salaryLevel1 = makeSalary(1);
let salaryLevel2 = makeSalary(2);
let salaryLevel3 = makeSalary(3);
//测试
console.log('工资：', salaryLevel2(3000))
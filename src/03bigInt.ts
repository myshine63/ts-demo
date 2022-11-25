// number可以表示的最大整数2^53-1;
(() => {
    // 整数后面加上n,或者用Bigint构造函数可以创建bigint类型的数据
    let a: bigint = 123n;
    let b: bigint = BigInt(123);
    // 超过精度的两个数，对比都是true
    let c = Number.MAX_SAFE_INTEGER + 1111
    let d = Number.MAX_SAFE_INTEGER + 2222;
    console.log(c === d) // true
    // bigint类型的数和number类型的数做运算的时候，需要转成相同类型。bigint不能使用Math中的方法
    // @ts-ignore
    console.log(0n === 0) // false
    // @ts-ignore
    console.log(0n == 0) // true
    // 其他可以正常比较
    console.log(2n > 2) // false
})()
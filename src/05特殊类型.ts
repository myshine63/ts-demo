// unknown 类型是 any 类型对应的安全类型,其他类型都可以赋值给unknown，但是它只能赋值给any和unknown
(function () {
    // 对于any,不采用任何类型检测，也就是any可以接收任何类型的值，也可以赋值给任何类型
    let a = 123
    let b: any;
    let c: string;
    b = a
    b = "123"
    c = b;
    console.log(c)
}());

(function () {
    //never 类型表示那些永不存在的值的类型,never 类型是任何类型的子类型,因此可以赋值给其他任何类型，但是其他类型都不能赋值给never.
    function error(message: string): never {
        throw new Error(message)
    }

    let a: string;
    a = error("123") //
}());

(function () {
    // unknown 是any的安全类型。可以接收其他类型，但是不能赋值给其他类型；
    let a: unknown = 123
    a = undefined;
    let b: any = a;
    let c = "hello tom";
    // let c:string = a // unknown不可以赋值给其他类型
    a = c // 其他类型可以赋值给unknown
}());
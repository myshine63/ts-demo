(() => {
    let a: number = 10;
    let b: string = "hello tom";
    let c: boolean = false;

    function f1(): void {
    }

    // 开启严格模式后，undefined,null 在开启严格模式后，就只能赋值给any，未开启时，可以互相赋值,并且可以赋值给其他类型。
    let d: undefined = undefined;
    let e: null = null;
    // 数组有两种申明方式，推荐第一种
    let f: string[] = ["tom"]
    let g: Array<number> = [1]
    // any表示不对类型进行检查，因此申明为any的变量可以接收除unknown意外的所有制，也可以赋值给任意其他类型
    let h: any = a; // 可以接收任意类型的值
    f = h; // 可以赋值给任意类型
    // object表示非原始类型，可以接收非原始类型的值
    let i: object = f;
    // i = a 不能接收普通类型
    // 元组类型，是指一个数组中元素类型不一致。要求类型一一对应，数量一致。可以越界添加，但是不能越界访问
    let j: [string, number, boolean?] = ["tom", 123]
})()
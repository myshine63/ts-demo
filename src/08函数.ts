// 可选参数一定要放在必填参数后面
function talk(name: string, id?: string) {

}

function talk2(initVal = 0, ...args: number[]) {

}

// this在ts中，noImplicitThis设置成false则是指any,否则指自己
let op = {
    a: 1,
    b: 2,
    add() {
        // 如果访问不属于自己的属性，则会报错
        console.log(this.a + this.b)
    }
}

// 函数重载

function f6(s: string): string
function f6(num: number): number
function f6(arg: string | number) {
    return arg
}
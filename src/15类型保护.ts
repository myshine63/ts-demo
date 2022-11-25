// 可以通过typeof,instanceof,in,字面量类型去缩小变量的类型范围

// 基本类型通过typeof缩小范围
function f1(a: number | string) {
    if (typeof a === "string") {
        console.log(a.length)
    }
    if (typeof a === "number") {
        console.log(a.toFixed(2))
    }
}

// 对于对象，可以通过instanceof去缩小范围
class A {
    name: number = 123;
}

function f2(a : 10) {
    console.log(a + 1)
}
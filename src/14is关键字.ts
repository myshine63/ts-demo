// is关键字用于函数返回值中，用于推断函数的参数类型

function f(a: unknown): a is string {
    return typeof a === "string"
}
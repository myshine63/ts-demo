// 接口用来定义一个数据类型,接口的名字要大写首字母

interface User {
    name: string;
    age: number;
    gender?: boolean; // 表示可选熟悉
    readonly id: string; // 只读的熟悉
}

interface Student extends User {
    age: number
}

// 这个接口说明了Language必须有id属性，并且只能为string类型，另外可以自由定义其他属性
interface Language {
    id: string;

    [propName: string]: string;
}

// 定义函数类型
interface SearchFunc {
    (id: string): User // 函数的参数名，不一定要一致
}

let ff: SearchFunc
// 函数的参数名字，不一定要和定义的一致
ff = function (id: string): User {
    return {
        name: "tom",
        id: id,
        age: 15
    }
}

interface Calculate {
    add(x: number, y: number): number

    multiply: (x: number, y: number) => number
}

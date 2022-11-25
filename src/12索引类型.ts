// keyOf 返回对象属性的联合类型，返回公共的属性
(() => {
    interface User {
        name: string;
        id: string;
        readonly age: number;
    }

    // 接口会返回所有属性，包括readonly类型的属性
    type A = keyof User // A等价于 "name"|"id"|"age" 的聚合类型
    let tom: A // tom的类型等价于 "name"|"id"|"age"
    tom = "name";
    tom = "id";
    tom = "age"

    class B {
        private name: string;
        id: string;
        protected age: string;
        readonly email: string

        constructor() {
            this.name = "tom"
            this.id = '123';
            this.age = "111";
            this.email = '111'
        }
    }

    // 只能获取到公共属性，C等价于 "id"|"email"
    type C = keyof B; // C等于字面量聚合类型
    type BValueType = B[C] // 通过这种方式可以获取到B的属性的类型的联合类型
})()
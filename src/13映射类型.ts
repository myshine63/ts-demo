// 映射类型可以将已知的类型变成可选或者可读,只能是public的属性

(() => {
    interface User {
        name: string;
        readonly age: number;
    }

    /** Options:等价于下面
     *  interface Options{
     *      name?: string;
     *      readonly age?: number;
     *  }
     * */
    type Options = Partial<User>;

    class B {
        id: string;
        protected age: string;
        private name: string;
        readonly email: string

        constructor() {
            this.name = "tom"
            this.id = '123';
            this.age = "111";
            this.email = '111'
        }
    }

    type c = Partial<B>
})()
class Duck {
    name: string; // 默认为public
    protected age: number // 只能自己和子类可以访问
    private id: string // 只有自己能访问
    constructor() {
        this.name = "duck";
        this.age = 12;
        this.id = "123"
    }
}

console.log(new Duck())
interface Person {
    name: string;

    say(): void;
}

class student implements Person {
    name: string

    constructor(name: string) {
        this.name = name
    }

    say() {
        console.log("hello" + this.name)
    }
}

// 接口继承

interface Teacher extends Person {
    age: number;
}
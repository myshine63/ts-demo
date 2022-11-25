// 抽象类不能直接创建对象。抽象类可以创建一些抽象方法，这些抽象方法必须在子类中实现

abstract class Tom {
    // 抽象方法，子类必须全部实现
    abstract say(): void;

    // 非抽象方法，需要自己实现
    move(): void {
        console.log("run")
    }
}

class smallTom extends Tom {
    say() {
        console.log("say")
    }
}

let tom = new smallTom()

tom.say()
tom.move()
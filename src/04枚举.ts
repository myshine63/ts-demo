// 1.枚举的时候没有赋值，默认表示0依次增长,
// 2.不可以将不同类型的枚举相互赋值
// 3.可以将对应的值赋值给枚举
(() => {
    enum week {
        mon,
        sat
    }

    function f1(a: week) {
        console.log(a)
    }

    f1(week.mon)
    f1(0);
})()

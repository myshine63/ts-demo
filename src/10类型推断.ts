interface People {
    name: string;
}

let onePeople = {} as People
onePeople.name = "tom"

// 非空断言
function greeting(name: string | null) {
    console.log("hello" + name!.charAt(0))
}

function logUser(a: People) {
    console.log(a.name)
}

logUser({name: "tom"})
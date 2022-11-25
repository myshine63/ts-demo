// 泛型是指变量的类似只有在代码运行的时候才知道，因此可以用一个字符代替，然后在运行代码的时候，才传入具体的类型
// 比如实现一个LRU缓存
interface Data<V> {
    weight: number;
    val: V;
}

class Lru<K, V> {
    maxSize: number;
    weight: number;
    cache: Map<K, Data<V>>;

    constructor(maxSize: number) {
        this.maxSize = maxSize;
        this.weight = 0;
        this.cache = new Map();
    }

    remove() {
        let min = this.weight;
        let deleteKey: K | undefined;
        for (let [key, value] of this.cache.entries()) {
            if (value.weight <= min) {
                min = value.weight
                deleteKey = key;
            }
        }
        if (deleteKey) {
            this.cache.delete(deleteKey)
        }
    }

    put(key: K, val: V) {
        if (this.cache.size >= this.maxSize && !this.cache.has(key)) {
            this.remove()
        }
        this.cache.set(key, {
            weight: this.weight,
            val: val
        })
        this.weight++
    }

    get(key: K): V | undefined {
        let res = this.cache.get(key);
        if (res) {
            res.weight = this.weight;
            this.weight++;
            return res.val
        }
        return
    }
}

let lru = new Lru<string, number>(5);
lru.put("0", 1)
lru.put("1", 1)
lru.put("2", 1)
lru.put("3", 1)
lru.put("4", 1)
lru.put("5", 1)
lru.put("0", 1)
console.log(lru.cache)
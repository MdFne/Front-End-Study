function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj
    }

    if (obj instanceof Date) {
        return new Date(obj.getTime())
    }
    if (obj instanceof Array) {
        return obj.map((item) => deepClone(item))
    }

    if (typeof obj === 'object') {
        const cloned = {}
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {  // 只克隆自己的属性，忽略原型链
                cloned[key] = deepClone(obj[key])
            }
        }
        return cloned
    }

}
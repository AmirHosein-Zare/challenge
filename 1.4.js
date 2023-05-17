const _object = {
    "name": "John",
    "age": 30
};

const handler = {
    get(target, prop, receiver){
        return "404";
    }
}

const proxy = new Proxy(target, handler);
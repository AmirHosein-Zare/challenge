const _object = {
    "name": "John",
    "age": 30
};

const handler = {
  get: function(target, prop) {
    // Intercept the property access and always return "404"
    return "404";
  }
};

const proxyObject = new Proxy(_object, handler);

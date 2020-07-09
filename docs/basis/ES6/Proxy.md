# Proxy
## 什么是Proxy
> `Proxy`用于修改某些操作的默认行为，可以理解成在目标对象前假设一个拦截层，外界对该对象的访问都必须先通过这层拦截，因此提供了一种机制可以对外界的访问进行过滤和改写。

生成一个`Proxy`实例；`target`表示所要拦截的目标对象，`handler`也是一个对象用来定制拦截行为。
```js
var proxy = new Proxy(target, handler);
```
例子：
```js
var proxy = new Proxy({}, {
    get: function(target,property) {
        return 35
    }
})
proxy.time // 35
```
> 如果没有Proxy介入，操作就是要访问目标对象的。第二个参数为配置对象，`get`方法用来拦截对目标对象属性的访问请求。该方法同样也有两个参数，`target`代表则目标对象，`property`表示所要访问的属性。可以看到由于拦截函数总是返回35，所以访问任何属性都将得到35。

> 要想Proxy起作用，要针对Proxy实例进行操作才行。如果配置对象没有设置任何拦截，则**等同于直通目标原对象**

## Proxy实例的方法（设置拦截多个操作）
- `get(target, propKey, receiver)`
> 拦截对象属性的读取，最后一个参数可选（参考`Reflect.get`）
+ 例子
    - get方法可以继承
    ```js
    let proto = new Proxy({}, {
        get(target, propertyKey,receiver) {
            console.log('GET'+propertyKey);
            return target[propertyKey]
        }
    })
    let obj = Object.create(proto)
    obj.xxx // "GET xxx"
    ```
    - 如果一个属性不可配置或不可写，则该属性不能被代理。通过Proxy访问该属性就会报错。
    ```js
    const target = Object.defineProperties({},{
        foo: {
            value: 123,
            writable: false,
            configurable: false
        }
    });
    const handler = {
        get(target, propKey) {
            return 'abc'
        }
    }
    const proxy = new Proxy(target, handler)
    proxy.foo // TypeError: Invariant check failed
    ```

- `set(target,propKey,value,receiver)`
> 拦截对象属性的设置，返回一个布尔值

- `has(target, propKey)`
> 拦截`propKey in proxy`的操作，返回一个布尔值

- `deleteProperty(target,prokey)`
> 拦截`delete proxy[propKey]`的操作，返回一个布尔值

- `ownKeys(target)`
> 该方法返回目标对象所有自身属性的属性名。

- `getOwnPropertyDescriptor(target, propKey)`
> 拦截`Object.getOwnPropertyDescriptor(proxy,propKey)`，返回属性的描述对象。

- `defineProperty(target,propKey,propDesc)`
> 拦截`Object.defineProperty(proxy,propKey,propDesc)`,`Object.defineProperties(proxy,propDescs)`返回要给布尔值。

- `apply(target,object,args)`
> 拦截Proxy实例，并将其作为函数调用的操作。

**三个参数分别是目标对象，目标对象的上下文对象，目标对象的参数数组**

- `construct(target, args)`
> 拦截Proxy实例作为构造函数调用的操作。比如`new Proxy(...args)`
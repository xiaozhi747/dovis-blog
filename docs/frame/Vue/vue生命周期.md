# vue生命周期
> 每个`vue`实例在被创建之前都要经过一系列的初始化过程。设置数据监听，编译模板，挂载实例到`DOM`中，在数据变化时更新`DOM`等。**在`Vue`生命周期钩子会自动绑定 `this` 上下文到实例中，因此你可以访问数据，对 `property` 和方法进行运算**

![img](/dovis-blog/vue/lifecycle.png)

## 初始化阶段
如图所示，`new Vue()`到`created`之间的阶段叫做初始化阶段。

> `new Vue()`被调用时发生了什么？**合并配置，初始化生命周期，初始化事件中心，初始化渲染，初始化`data,props,computed,watcher`等等。**

```js
function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}
```
生命周期的初始化流程在`this._init`中实现。

### `beforeCreate`&`created`
> `beforeCreate`和`created`函数都是在实例化`Vue`的阶段，在`_init`方法中执行的。

```js
Vue.prototype._init = function(options?: Object) {
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options)
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      )
    }
    // ....
    initLifecycle(vm)
    initEvents(vm)
    initRender(vm)
    callHook(vm, 'beforeCreate')
    initInjections(vm) // resolve injections before data/props
    initState(vm)
    initProvide(vm) // resolve provide after data/props
    callHook(vm, 'created')
    // ....
     if (vm.$options.el) {
      vm.$mount(vm.$options.el)
    }
    // 如果用户在实例化Vue.js时传递el选项，则自动开启模板编译阶段与挂载阶段，挂载的目标是把模板渲染成最终的DOM
    // 如果没有传递el选项，则不进入下一个生命周期流程
    // 用户需要执行vm.$mount方法，手动开启模板编译阶段和挂载阶段
}
```
> 在执行初始化流程之前，实例上挂载了`$options`属性。这部分代码目的是将用户传递的`options`选项与当前构造函数的`options`属性及其父级实例构造函数的`options`属性，合并成一个新的并赋值给`$options`属性。

可以看到`beforeCreated`和`created`钩子调用分别在`initState`前后，`initState`作用是初始化`props`，`data`，`methods`，`watch`，`computed`，`provide`和`inject`等属性。最后判断用户是否在参数中提供了`el`选项，如果是，则调用`vm.$mount`方法，进入后面的生命周期阶段。

::: tip
Vue.js通过`callHook`函数来触发生命周期钩子。触发用户设置的生命周期钩子。

值得注意的是Vue.js在合并`options`过程中会找出`options`中所有`key`是钩子函数的名字，并转换成数组。**转换成数组是可以同一个生命周期钩子列表保存多个生命周期钩子**
:::

```js
export function callHook (vm: Component, hook: string) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget()
  const handlers = vm.$options[hook] // 数组
  const info = `${hook} hook`
  if (handlers) {
    for (let i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info)
    } // 执行每个生命周期钩子，就可以触发钩子函数
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook)
  }
  popTarget()
}
```
上述`invokeWithErrorHanding`为捕获钩子函数内发生错误的函数：
```js
export function invokeWithErrorHandling (
  handler: Function,
  context: any,
  args: null | any[],
  vm: any,
  info: string
) {
  let res
  try {
    res = args ? handler.apply(context, args) : handler.call(context)
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(e => handleError(e, vm, info + ` (Promise/async)`))
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true
    }
  } catch (e) {
    handleError(e, vm, info)
  }
  return res
}
```
::: tip
`handleError`会依次执行父组件的`errorCaptured`钩子函数与全局的`config.errorHandler`。这也是为什么生命周期钩子`errorCaptured`可以捕获子孙组件的错误。
:::

### `errorCaptured`与错误处理
> 此钩子函数会收到三个参数：错误对象，发生错误的组件实例和一个包含错误来源信息的字符串。然后此钩子函数可以返回`false`，阻止错误继续向上传播。

+ 传播规则
    - 默认情况如果全局的`config.errorHandler`被定义，那么所有错误都会发送给它。
    - 如果一个组件继承的链路或其父级从属链路存在多个`errorCaptured`钩子，则它们会被相同的错误逐个唤起。
    - 如果`errorCaptured`钩子函数自身抛出一个错误，则这个新错误和原本的错误都会发送给全局

### 初始化实例属性
```js
export function initLifecycle (vm: Component) {
  const options = vm.$options

  // locate first non-abstract parent
  let parent = options.parent
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent
    }
    parent.$children.push(vm)
  }

  vm.$parent = parent
  vm.$root = parent ? parent.$root : vm

  vm.$children = []
  vm.$refs = {}

  vm._watcher = null
  vm._inactive = null
  vm._directInactive = false
  vm._isMounted = false
  vm._isDestroyed = false
  vm._isBeingDestroyed = false
}
```
> 如果当前组件不是抽象组件并且存在父级，那么需要通过`while`来自底向上循环；如果父级是抽象类，那么继续向上。直到遇到第一个非抽象类父级时，将它赋值给`vm.$parent`属性。

> `vm.$children`属性，会包含当前实例的直接子组件。该属性的值是从子组件中主动添加到父组件中的。

### 初始化事件
::: tip
父组件可以在使用子组件的地方用`v-on`来监听子组件触发的事件。
:::
> 在模板编译阶段，可以得到某个标签上的所有属性，其中就包括使用`v-on`或`@`注册的事件。在模板编译阶段，我们会将整个模板编译成渲染函数，而渲染函数其实就是一些嵌套在一起的创建元素的节点的函数。那么此时如果`v-on`写在原生标签上，事件就会被注册到原生的浏览器事件系统中。如果写在组件标签上，那么这个事件会被注册到子组件`Vue.js`事件系统中。

::: warning
所以实例初始化阶段，被初始化的事件指的是父组件在模板中使用`v-on`监听子组件内触发的事件。
:::

```js
export function initEvents (vm: Component) {
  vm._events = Object.create(null) // 创建一个空对象来存放事件，事实上，所有使用vm.$on注册的事件监听器都会保存到这个对象中。
  vm._hasHookEvent = false
  // init parent attached events
  const listeners = vm.$options._parentListeners // 子组件获取父组件传给自己的事件。
  if (listeners) {
    updateComponentListeners(vm, listeners)
  }
}
```

**`updateComponentListeners`代码：**
```js
let target: any

function add (event, fn) {
  target.$on(event, fn)
}

function remove (event, fn) {
  target.$off(event, fn)
}

function createOnceHandler (event, fn) {
  const _target = target
  return function onceHandler () {
    const res = fn.apply(null, arguments)
    if (res !== null) {
      _target.$off(event, onceHandler)
    }
  }
}

export function updateComponentListeners (
  vm: Component,
  listeners: Object,
  oldListeners: ?Object
) {
  target = vm
  updateListeners(listeners, oldListeners || {}, add, remove, createOnceHandler, vm) // 循环在这里面
  target = undefined
}
```
> 循环`vm.$options._parentListeners`并使用`vm.$on`把事件都注册到`this._events`即可。

**`updateListeners`代码：**
```js
export function updateListeners (
  on: Object,
  oldOn: Object,
  add: Function,
  remove: Function,
  createOnceHandler: Function,
  vm: Component
) {
  let name, def, cur, old, event
  for (name in on) {
    def = cur = on[name]
    old = oldOn[name]
    event = normalizeEvent(name)
    /* istanbul ignore if */
    if (__WEEX__ && isPlainObject(def)) {
      cur = def.handler
      event.params = def.params
    }
    if (isUndef(cur)) {
      process.env.NODE_ENV !== 'production' && warn(
        `Invalid handler for event "${event.name}": got ` + String(cur),
        vm
      )
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm)
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture)
      }
      add(event.name, cur, event.capture, event.passive, event.params)
    } else if (cur !== old) {
      old.fns = cur
      on[name] = old
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name)
      remove(event.name, oldOn[name], event.capture)
    }
  }
}
```
> 第一部分循环`on`，第二部分循环`oldOn`。第一部分的主要作用是判断哪些事件在`oldOn`中不存在，调用`add`注册事件。第二部分作用是循环`oldOn`，判断哪些事件在`on`不存在，调用`remove`移除这些事件。

+ 循环`on`过程，如下三个判断：
  - 判断事件名对应的值是否为`undefined`或者`null`，如果是控制台触发警告。---`isUndef()`
  - 判断事件名在`oldOn`是否存在，不存在则调用`add`
  - 如果事件名在`on`和`oldOn`都存在，但是并不相同，则将事件回调替换成`on`中的回调，并且把`on`中的回调引用指向真实的事件系统中注册的事件，也就是`oldOn`中对应的事件。

**`normalizeEvent`代码：**
```js
const normalizeEvent = cached((name: string): {
  name: string,
  once: boolean,
  capture: boolean,
  passive: boolean,
  handler?: Function,
  params?: Array<any>
} => {
  const passive = name.charAt(0) === '&'
  name = passive ? name.slice(1) : name
  const once = name.charAt(0) === '~' // Prefixed last, checked first
  name = once ? name.slice(1) : name
  const capture = name.charAt(0) === '!'
  name = capture ? name.slice(1) : name
  return {
    name,
    once,
    capture,
    passive
  }
})
```
::: tip
如果事件加上了`capture`，`once`和`passive`修饰符，那么在模板编译阶段会将这些修饰符改成对应的符号加在事件名前面，分别为`!`，`~`和`&`。可以得知`normalizeEvent`函数最终输出了保存事件名和事件修饰符的一个对象，修饰符返回`true`表示事件使用了此修饰符。
:::

### 初始化`inject`
> 源码中`inject`在`data/props`之前初始化，而`provide`在`data/props`之后初始化。这样做的目的是让用户在`data/props`中使用`inject`所注入的内容。

### [初始化状态](/frame/Vue/初始化状态)
初始化`initState`的代码如下：
```js
export function initState (vm: Component) {
  vm._watchers = []
  const opts = vm.$options
  if (opts.props) initProps(vm, opts.props)
  if (opts.methods) initMethods(vm, opts.methods)
  if (opts.data) {
    initData(vm)
  } else {
    observe(vm._data = {}, true /* asRootData */)
  }
  if (opts.computed) initComputed(vm, opts.computed)
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch)
  }
}
```
> `vm._watchers`用来保存当前组件中所有的`watcher`实例。无论是使用`vm.$watch`注册的`watcher`实例还是使用`watch`选项添加的`watcher`实例，都会添加到`vm._watchers`中。先初始化`props`，后初始化`data`，这样就可以在`data`中使用`props`中的数据，在`watch`中既可以观察`props`，也可以观察`data`，因为它是最后被初始化的。

### 初始化`provide`

::: tip
`beforeCreate -> created`
- 初始化`vue`实例，进行数据观测

`created`
- 完成数据观测，属性和方法运算，`watch/event`事件回调的配置
- 可调用`methods`中的方法，访问/修改`data`数据触发响应式渲染`dom`，可以通过`computed`和`watch`完成数据计算
- 此时`vm.$el`并没有被创建
:::

## 模板编译阶段
在`created`和`beforeMount`之间的阶段是模板编译阶段。目标是将模板编译为渲染函数。构建版本的不存在这个阶段。

> 当使用`vue-loader`或`vueify`时，`*.vue`文件内部的模板会在构建时预编译，所以最终打好包里是不需要编译器的，用运行版本即可。**由于模板这时已经预编译成渲染函数，所以生命周期中并不存在模板编译阶段，初始化阶段的下一个生命周期直接就是挂载阶段。**

::: tip
`created` -> `beforeMount`
- 判断是否存在`el`选项，若不存在则停止编译，直到调用`vm.$mount(el)`才会继续编译
- 优先级：`render` -> `template` -> `outerHTML`
- `vm.el`获取到的是挂载`DOM`的
:::

## 挂载阶段
`beforeMount`到`mounted`钩子函数之间就是挂载阶段。挂载过程中，vue.js会开启`Watcher`来持续追踪依赖的变化。当数据发生变化时，`Watcher`会通知虚拟`DOM`重新渲染视图，并且会在渲染视图前触发`beforeUpdate`钩子函数，渲染完毕后触发`updated`钩子函数。

::: tip
1. 当`data`被修改时就会先调用`beforeUpdate`。然后重新渲染并虚拟`DOM`并把应用更新。
2. 更新完成后调用`updated`函数。
:::

```js
const mount = Vue.prototype.$mount
Vue.prototype.$mount = function (
  el?: string | Element,
  hydrating?: boolean
): Component {
  el = el && query(el)

  /* istanbul ignore if */
  if (el === document.body || el === document.documentElement) {
    process.env.NODE_ENV !== 'production' && warn(
      `Do not mount Vue to <html> or <body> - mount to normal elements instead.`
    )
    return this
  }

  const options = this.$options
  // resolve template/el and convert to render function
  if (!options.render) {
    let template = options.template
    if (template) {
      if (typeof template === 'string') {
        if (template.charAt(0) === '#') {
          template = idToTemplate(template)
          /* istanbul ignore if */
          if (process.env.NODE_ENV !== 'production' && !template) {
            warn(
              `Template element not found or is empty: ${options.template}`,
              this
            )
          }
        }
      } else if (template.nodeType) {
        template = template.innerHTML
      } else {
        if (process.env.NODE_ENV !== 'production') {
          warn('invalid template option:' + template, this)
        }
        return this
      }
    } else if (el) {
      template = getOuterHTML(el)
    }
    if (template) {
      /* istanbul ignore if */
      if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
        mark('compile')
      }

      const { render, staticRenderFns } = compileToFunctions(template, {
        outputSourceRange: process.env.NODE_ENV !== 'production',
        shouldDecodeNewlines,
        shouldDecodeNewlinesForHref,
        delimiters: options.delimiters,
        comments: options.comments
      }, this)
      options.render = render
      options.staticRenderFns = staticRenderFns

      /* istanbul ignore if */
      if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
        mark('compile end')
        measure(`vue ${this._name} compile`, 'compile', 'compile end')
      }
    }
  }
  return mount.call(this, el, hydrating)
}
```
### `beforeMount`&`mounted`
::: tip
`beforeMount`
- 此阶段可以获取到`vm.el`
- 此阶段`vm.el`虽已完成`DOM`初始化，但并未挂载在`el`选项上

`beforeMount` -> `mounted`
- 此阶段`vm.el`完成挂载，`vm.$el`生成的`DOM`替换了`el`选项对应的`DOM`

`mounted`
- `vm.el`已完成`DOM`的挂载与渲染，此刻打印`vm.$el`，发现之前的挂载点及内容已被替换成新的`DOM`

`beforeUpdate`
- 更新的数据必须是被渲染在模板上的（`el`/`tempalte`/`render`之一）
- 此时`view`层还未更新
- 若在`beforeUpdate`中再次修改数据，不会再次触发更新方法。

`updated`
- 完成`view`层更新
- 若再次修改数据，会再次触发更新方法`beforeUpdate/updated`
:::

## 卸载阶段
应用调用`vm.$destroy`方法后，Vue.js的生命周期会进入卸载阶段。在这个阶段，vue.js会将自身从父组件中删除，取消实例上所有依赖的追踪并且移除所有的事件监听器。

### `beforeDestroy`&`destroyed`
::: tip
`beforeDestroy`
- 实例被销毁前调用，此时实例属性与方法仍可访问

`destroyed`
- 完全销毁一个实例。可清理它与其他实例的连接，解绑全部指令及事件监听器
- 并不能清除`DOM`，仅仅销毁实例
:::
## `keep-alive`缓存组件
### `activated`&`deactivated`
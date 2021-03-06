# 指令的奥秘
指令的职责是当表达式的值改变时，将其产生的连带影响响应式地作用于`DOM`。指令相关的知识贯穿vue内部各个核心技术。在模块解析阶段，我们在将指令解析到`AST`，然后使用`AST`生成代码字符串的过程中实现某些内置指令的功能，最后在虚拟`DOM`渲染的过程中触发自定义指令的钩子函数使指令生效。

- 在模板解析阶段，会将节点上的指令解析处理并添加到`AST`的`dirctives`属性中。
- 随后`directives`数据会传递到`VNode`中，接着可以通过`vnode.data.directives`获取一个节点所绑定的指令。
- 最后，当虚拟`DOM`进行修补时，会根据节点对比结果触发一些钩子函数。更新指令的程序会监听`create,update和destroy`钩子函数。（使用自定义指令，可以监听5种钩子函数：`bind,inserted,update,componentUpdated,unbind`）。指令的钩子函数被触发后，就说明指令生效了。

## 自定义指令
## 内置指令
有些内置指令是在模板编译阶段实现的。在代码生成时，通过生成一个特殊的代码字符串来实现指令的功能。
### v-if/v-show
- `v-if`相当于真正的条件渲染，当条件为假时，元素不会被渲染。
- `v-show`不管初始条件是什么，第一次元素总被渲染。之后的切换相当于`display:none`和`display:block`切换。
::: tip
控制手段：`v-show`隐藏则是为该元素添加`css--display:none`，`dom`元素依旧还在。`v-if`显示隐藏是将`dom`元素整个添加或删除。
编译过程：`v-if`切换有一个局部编译/卸载的过程，切换过程中合适地销毁和重建内部的事件监听和子组件；`v-show`只是简单的基于`css`切换
编译条件：`v-if`是真正的条件渲染，它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。只有渲染条件为假时，并不做操作，直到为真才渲染
- `v-show` 由`false`变为`true`的时候不会触发组件的生命周期
- `v-if`由`false`变为`true`的时候，触发组件的`beforeCreate、create、beforeMount、mounted`钩子，由`true`变为`false`的时候触发组件的`beforeDestroy、destroyed`方法
性能消耗：`v-if`有更高的切换消耗；`v-show`有更高的初始渲染消耗
:::


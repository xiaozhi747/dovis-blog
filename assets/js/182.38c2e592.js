(window.webpackJsonp=window.webpackJsonp||[]).push([[182],{504:function(v,e,_){"use strict";_.r(e);var o=_(33),t=Object(o.a)({},(function(){var v=this,e=v.$createElement,_=v._self._c||e;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"指令的奥秘"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#指令的奥秘"}},[v._v("#")]),v._v(" 指令的奥秘")]),v._v(" "),_("p",[v._v("指令的职责是当表达式的值改变时，将其产生的连带影响响应式地作用于"),_("code",[v._v("DOM")]),v._v("。指令相关的知识贯穿vue内部各个核心技术。在模块解析阶段，我们在将指令解析到"),_("code",[v._v("AST")]),v._v("，然后使用"),_("code",[v._v("AST")]),v._v("生成代码字符串的过程中实现某些内置指令的功能，最后在虚拟"),_("code",[v._v("DOM")]),v._v("渲染的过程中触发自定义指令的钩子函数使指令生效。")]),v._v(" "),_("ul",[_("li",[v._v("在模板解析阶段，会将节点上的指令解析处理并添加到"),_("code",[v._v("AST")]),v._v("的"),_("code",[v._v("dirctives")]),v._v("属性中。")]),v._v(" "),_("li",[v._v("随后"),_("code",[v._v("directives")]),v._v("数据会传递到"),_("code",[v._v("VNode")]),v._v("中，接着可以通过"),_("code",[v._v("vnode.data.directives")]),v._v("获取一个节点所绑定的指令。")]),v._v(" "),_("li",[v._v("最后，当虚拟"),_("code",[v._v("DOM")]),v._v("进行修补时，会根据节点对比结果触发一些钩子函数。更新指令的程序会监听"),_("code",[v._v("create,update和destroy")]),v._v("钩子函数。（使用自定义指令，可以监听5种钩子函数："),_("code",[v._v("bind,inserted,update,componentUpdated,unbind")]),v._v("）。指令的钩子函数被触发后，就说明指令生效了。")])]),v._v(" "),_("h2",{attrs:{id:"自定义指令"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#自定义指令"}},[v._v("#")]),v._v(" 自定义指令")]),v._v(" "),_("h2",{attrs:{id:"内置指令"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#内置指令"}},[v._v("#")]),v._v(" 内置指令")]),v._v(" "),_("p",[v._v("有些内置指令是在模板编译阶段实现的。在代码生成时，通过生成一个特殊的代码字符串来实现指令的功能。")]),v._v(" "),_("h3",{attrs:{id:"v-if-v-show"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#v-if-v-show"}},[v._v("#")]),v._v(" v-if/v-show")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("v-if")]),v._v("相当于真正的条件渲染，当条件为假时，元素不会被渲染。")]),v._v(" "),_("li",[_("code",[v._v("v-show")]),v._v("不管初始条件是什么，第一次元素总被渲染。之后的切换相当于"),_("code",[v._v("display:none")]),v._v("和"),_("code",[v._v("display:block")]),v._v("切换。")])]),v._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[v._v("TIP")]),v._v(" "),_("p",[v._v("控制手段："),_("code",[v._v("v-show")]),v._v("隐藏则是为该元素添加"),_("code",[v._v("css--display:none")]),v._v("，"),_("code",[v._v("dom")]),v._v("元素依旧还在。"),_("code",[v._v("v-if")]),v._v("显示隐藏是将"),_("code",[v._v("dom")]),v._v("元素整个添加或删除。\n编译过程："),_("code",[v._v("v-if")]),v._v("切换有一个局部编译/卸载的过程，切换过程中合适地销毁和重建内部的事件监听和子组件；"),_("code",[v._v("v-show")]),v._v("只是简单的基于"),_("code",[v._v("css")]),v._v("切换\n编译条件："),_("code",[v._v("v-if")]),v._v("是真正的条件渲染，它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。只有渲染条件为假时，并不做操作，直到为真才渲染")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("v-show")]),v._v(" 由"),_("code",[v._v("false")]),v._v("变为"),_("code",[v._v("true")]),v._v("的时候不会触发组件的生命周期")]),v._v(" "),_("li",[_("code",[v._v("v-if")]),v._v("由"),_("code",[v._v("false")]),v._v("变为"),_("code",[v._v("true")]),v._v("的时候，触发组件的"),_("code",[v._v("beforeCreate、create、beforeMount、mounted")]),v._v("钩子，由"),_("code",[v._v("true")]),v._v("变为"),_("code",[v._v("false")]),v._v("的时候触发组件的"),_("code",[v._v("beforeDestroy、destroyed")]),v._v("方法\n性能消耗："),_("code",[v._v("v-if")]),v._v("有更高的切换消耗；"),_("code",[v._v("v-show")]),v._v("有更高的初始渲染消耗")])])])])}),[],!1,null,null,null);e.default=t.exports}}]);
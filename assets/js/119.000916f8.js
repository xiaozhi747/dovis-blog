(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{439:function(s,a,t){"use strict";t.r(a);var n=t(33),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"构建并发布一个vue组件到npm上"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#构建并发布一个vue组件到npm上"}},[s._v("#")]),s._v(" 构建并发布一个vue组件到npm上")]),s._v(" "),t("p",[s._v("详细介绍如何发布一个"),t("code",[s._v("npm")]),s._v("包。用vue封装一个基于"),t("code",[s._v("canvas")]),s._v("的头像剪裁组件。")]),s._v(" "),t("h2",{attrs:{id:"构建一个vue项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#构建一个vue项目"}},[s._v("#")]),s._v(" 构建一个"),t("code",[s._v("vue")]),s._v("项目")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("vue init webpack-simple "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("project-name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("最后组件封装完成的项目目录如下：")]),s._v(" "),t("p",[t("img",{attrs:{src:"/dovis-blog/other/36.png",alt:"img"}})]),s._v(" "),t("p",[s._v("其中"),t("code",[s._v("AvatarCrop.vue")]),s._v("就是组件的源码。vue官方文档有说过：Vue.js 的插件应该暴露一个 "),t("code",[s._v("install")]),s._v(" 方法。这个方法的第一个参数是 "),t("code",[s._v("Vue")]),s._v(" 构造器，第二个参数是一个可选的选项对象:\n所以在项目根目录下有"),t("code",[s._v("index.js")]),s._v("文件就是为组件暴露一个"),t("code",[s._v("install")]),s._v("方法。")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" AvatarCrop "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./AvatarCrop.vue'")]),s._v("\nAvatarCrop"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("install")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("Vue")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    Vue"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("component")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("AvatarCrop"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" AvatarCrop"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" AvatarCrop\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h2",{attrs:{id:"使用这个组件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用这个组件"}},[s._v("#")]),s._v(" 使用这个组件")]),s._v(" "),t("p",[s._v("在项目根目录"),t("code",[s._v("main.js")]),s._v("文件中：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" AvatarCrop "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./index.js'")]),s._v("\n\nVue"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("use")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("AvatarCrop"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("就可以在全局下使用"),t("code",[s._v("AvatarCrop")]),s._v("组件，这里我们在"),t("code",[s._v("App.vue")]),s._v("中使用测试一下。")]),s._v(" "),t("div",{staticClass:"language-html line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("template")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("id")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("app"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("avatar-crop")]),s._v(" \n    "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("avatarUrl")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("'")]),s._v("http://api.kingdee.com/kdrive/user/file/public?client_id=200547&file_id=142265450&scode=elNmekdEODZGck1DY245M3piK3Z6&sign=42afb99c7af5944db3cc6d679832fef71cdda0ed"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("'")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("width")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("200px"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("height")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("200px"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("acceptType")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("'")]),s._v("image/png,image/jpg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("'")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v(":stepratio")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("100"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v(":duration")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("300"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v(":stepOnce")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("20"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("@uploadSucess")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("getBlobData"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("uploadApi")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("'")]),s._v("/user/upload"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("'")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("/>")])]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("div")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("template")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("p",[s._v("使用效果如图：")]),s._v(" "),t("p",[t("img",{attrs:{src:"/dovis-blog/other/37.png",alt:"img"}})]),s._v(" "),t("h2",{attrs:{id:"发布到npm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#发布到npm"}},[s._v("#")]),s._v(" 发布到npm")]),s._v(" "),t("ul",[t("li",[s._v("打包之前，首先需要修改一下"),t("code",[s._v("webpack.config.js")]),s._v("这个文件；")])]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ... 此处省略代码 ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 执行环境")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("NODE_ENV")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" process"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("env"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("NODE_ENV")]),s._v("\n\nmodule"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 根据不同的执行环境配置不同的入口")]),s._v("\n  entry"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("NODE_ENV")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'development'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./src/main.js'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./src/index.js'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  output"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 修改打包出口，\b在最外级目录\b打包出一个\b index.js 文件，我们 import 默认会指向这个文件")]),s._v("\n    path"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" path"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("resolve")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("__dirname"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./dist'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    publicPath"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/dist/'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    filename"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'avatarcrop.js'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    library"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ef-avatarcrop'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 指定的就是你使用require时的模块名")]),s._v("\n    libraryTarget"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'umd'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// libraryTarget会生成不同umd的代码,可以只是commonjs标准的，也可以是指amd标准的，也可以只是通过script标签引入的")]),s._v("\n    umdNamedDefine"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 会对 UMD 的构建过程中的 AMD 模块进行命名。否则就使用匿名的 define")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ... 此处省略代码 ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br")])]),t("ul",[t("li",[s._v("修改"),t("code",[s._v("package.json")]),s._v("文件：")])]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// \b发布\b开源因此需要将这个字段改为 false")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"private"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// \b这个指 import custom-ui 的时候它会去检索的路径")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"main"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dist/avatarcrop.js"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("ul",[t("li",[s._v("发布npm包：")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" login // 登录，没有账号就先用邮箱注册并验证邮箱\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" publish //发布\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"项目中使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#项目中使用"}},[s._v("#")]),s._v(" 项目中使用")]),s._v(" "),t("p",[s._v("然后在如iconcool项目中使用这个npm包：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" ef-avatarcrop -S\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("在项目"),t("code",[s._v("main.js")]),s._v("文件引入插件：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" AvatarCrop "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ef-avatarcrop'")]),s._v("\n\nVue"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("use")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("AvatarCrop"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("在项目组件中使用这个插件：\n"),t("img",{attrs:{src:"/dovis-blog/other/38.png",alt:"img"}})]),s._v(" "),t("h2",{attrs:{id:"插件开发过程需要注意"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#插件开发过程需要注意"}},[s._v("#")]),s._v(" 插件开发过程需要注意")]),s._v(" "),t("ol",[t("li",[s._v("修改 "),t("code",[s._v(".gitignore")]),s._v(" 去掉忽略"),t("code",[s._v("dist")]),s._v(",因为我们打包的文件也需要提交；每次上到"),t("code",[s._v("npm")]),s._v("上需要更改版本号，"),t("code",[s._v("package.json")]),s._v(" 里的 "),t("code",[s._v("version")]),s._v(" 字段\n发包后如果需要修改npm包并重新发版可以，在修改后：")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" version minor "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 更新一个小改动")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 然后发布")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" publish "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这个时候package.json文件中version会自动更新成1.x.0小版本")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 更新大版本")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" version major\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 更新补丁")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" version patch\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 也可以手动查看版本号并手动更改版本")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" version "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" version xxx "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 手动新增一个版本号，如1.0.1")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("ol",{attrs:{start:"2"}},[t("li",[s._v("如果想撤销刚刚发布的包可以：")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" unpublish 包名 --force\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("strong",[s._v("不过注意，这个操作之后将会导致你需要隔24小时才能重新发包")])]),s._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[s._v("包依赖更新后，项目中使用也需要及时更新")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 更新某个包")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" update @xxx -S/-D\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 全局删除某个包")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" uninstall @xxx -g\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("ol",{attrs:{start:"4"}},[t("li",[s._v("插件中使用了图片的可以使用"),t("code",[s._v("webpack")]),s._v("的"),t("code",[s._v("url-loader")]),s._v("让符合"),t("code",[s._v("limit")]),s._v("的图片打包后转为"),t("code",[s._v("base64")]),s._v("的图片，那么项目使用插件就可以看到图片了。")])]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// test: /\\.(png|jpe?g|gif|svg)(\\?.*)?$/,")]),s._v("\n    test"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[s._v("/\\.(png|jpg|gif)$/")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    use"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            loader"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'url-loader'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            options"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                limit"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10000")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// name: '[name].[ext]?[hash:8]'")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("p",[s._v("不过在"),t("code",[s._v("url-loader")]),s._v("高版本的情况下，图片会被渲染成：")]),s._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token property"}},[s._v("background-image")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token url"}},[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("url")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("[object Object]"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("这个时候可以把"),t("code",[s._v("url-loader")]),s._v("手动降低版本为"),t("code",[s._v("0.6.2")]),s._v("就可以解决这个问题了。")])])}),[],!1,null,null,null);a.default=e.exports}}]);
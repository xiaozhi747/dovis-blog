(window.webpackJsonp=window.webpackJsonp||[]).push([[214],{534:function(t,s,a){"use strict";a.r(s);var n=a(33),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_1-编写高质量javascript的188个建议"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-编写高质量javascript的188个建议"}},[t._v("#")]),t._v(" 1.编写高质量JavaScript的188个建议")]),t._v(" "),a("h2",{attrs:{id:"减少全局变量污染"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#减少全局变量污染"}},[t._v("#")]),t._v(" 减少全局变量污染")]),t._v(" "),a("blockquote",[a("p",[t._v("定义全局变量的三种方式：")]),t._v(" "),a("ol",[a("li",[t._v("在任何函数外面直接执行var语句")]),t._v(" "),a("li",[t._v("直接添加一个属性到全局对象上。在Web浏览器种，全局对象名为window。")]),t._v(" "),a("li",[t._v("直接使用未经声明的变量，以这种方式定义的全局变量被称为隐式的全局变量。")])])]),t._v(" "),a("h2",{attrs:{id:"注意数据类型的特殊性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意数据类型的特殊性"}},[t._v("#")]),t._v(" 注意数据类型的特殊性")]),t._v(" "),a("blockquote",[a("ol",[a("li",[a("p",[t._v("防止浮点数溢出")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("num "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//0.30000000....")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("慎用Javascript类型自动转换")]),t._v(" "),a("ul",[a("li",[t._v("如果把非空对象用在逻辑运算环境中，则对象被转换为true")]),t._v(" "),a("li",[t._v("如果把对象用在数值运算环境中，则对象会被自动转换为数字，如果转换失败，则返回NaN。\n"),a("ol",[a("li",[t._v("空数组则转换为0")]),t._v(" "),a("li",[t._v("一个数字元素的数组则转化成该数字本身")]),t._v(" "),a("li",[t._v("如果多个数字元素或者仅包含一个非数字元素的数组，则转化成NaN")])])]),t._v(" "),a("li",[t._v("当对象用于字符串环境中，Js则调用toString()方法把对象转化为字符串再进行相关计算。")])])]),t._v(" "),a("li",[a("p",[t._v("正确检测数据类型")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("typeof null为object")]),t._v(" "),a("blockquote",[a("p",[t._v("原理是这样的。不同的对象在底层都表示为二进制，在javascript中二进制前三位都为0的话会被判断为object类型，")]),t._v(" "),a("p",[t._v("null的二进制表示全0，自然前三位也是0，所以执行typeof时会返回“object”")])])]),t._v(" "),a("li",[a("p",[t._v("对于对象或数组，可以使用constructor属性，该属性值引用的是原来构造该对象的函数。对于undefined和null特殊值就不能使用constructor属性，因为JS解释器会报出错误。")])]),t._v(" "),a("li",[a("p",[t._v("使用toString()方法检测把对象转换为字符串，返回的字符串形式如下：")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("object "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n\tobject表示对象的通用类型，class表示对象的内部类型，内部类型的名称与该对象的构造函数名对应。\n\t用户自定义对象的class值为Object\n\t\n\t要获取对象的class值唯一方法是必须调用Object对象定义的默认toString()方法，所以不能直接调用对象的该方法。要调用Object对象定义的默认toString()方法，可以先调用Object.prototype.toString对象默认toString()函数，再调用该函数的apply()方法在想要检测的对象上执行。\n */")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" d "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" m "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("toString\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("m")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apply")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//[object Date]")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])])])])]),t._v(" "),a("li",[a("p",[t._v("避免使用parseInt")]),t._v(" "),a("blockquote",[a("p",[t._v("是一个将字符串转换为整数的函数，在开始转换时，parseInt会先查看位置0处的字符，不是有效字符就返回NaN。对于以0开头的数字字符串，该函数会把它作为八进制数字处理，先把它转换为数值，然后再转换为十进制数字返回。0x开头则转为十六进制")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseInt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("010")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//8")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[a("strong",[t._v('parseInt可以接受一个基数作为参数，这样parseInt("09",10)结果为9')])])])])])]),t._v(" "),a("h2",{attrs:{id:"正确处理javascript特殊值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#正确处理javascript特殊值"}},[t._v("#")]),t._v(" 正确处理Javascript特殊值")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("正确使用NaN和Infinity")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("NaN")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'number'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("使用"),a("code",[t._v("isFinite")]),t._v(" 函数能够检测NaN，正负无穷大。如果有限数值，或者可以转换为有限数值，那么将返回true。如果只是NaN，正负无穷大的数值，则返回false。不过该函数会把运算转换为一个数字。")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);
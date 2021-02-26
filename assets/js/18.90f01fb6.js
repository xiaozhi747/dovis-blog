(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{338:function(v,_,c){"use strict";c.r(_);var e=c(33),o=Object(e.a)({},(function(){var v=this,_=v.$createElement,c=v._self._c||_;return c("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[c("h1",{attrs:{id:"页面性能优化的方法"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#页面性能优化的方法"}},[v._v("#")]),v._v(" 页面性能优化的方法")]),v._v(" "),c("ul",[c("li",[v._v("前端性能优化的核心\n"),c("ul",[c("li",[v._v("减少"),c("code",[v._v("http")]),v._v("请求数量")]),v._v(" "),c("li",[v._v("减少请求资源的大小")])])])]),v._v(" "),c("ol",[c("li",[c("code",[v._v("html/css/js")]),v._v("压缩")])]),v._v(" "),c("blockquote",[c("p",[c("code",[v._v("html")]),v._v("代码压缩就是压缩一些文本文件中有意义，但是在"),c("code",[v._v("HTML")]),v._v("中不显式的字符，包括空格，制表符，换行符等，还有一些其他意义的字符，如"),c("code",[v._v("html")]),v._v("注释也可以被压缩")])]),v._v(" "),c("ul",[c("li",[c("p",[v._v("如何进行"),c("code",[v._v("html")]),v._v("压缩：")]),v._v(" "),c("ul",[c("li",[v._v("使用在线网站进行压缩；")]),v._v(" "),c("li",[c("code",[v._v("node.js")]),v._v("提供的"),c("code",[v._v("html-minifier")]),v._v("工具")]),v._v(" "),c("li",[v._v("后端的模板引擎渲染压缩")])])]),v._v(" "),c("li",[c("p",[c("code",[v._v("css")]),v._v("代码压缩")]),v._v(" "),c("ul",[c("li",[v._v("使用"),c("code",[v._v("html-minifier")]),v._v("对"),c("code",[v._v("html")]),v._v("中的"),c("code",[v._v("css")]),v._v("进行压缩；")]),v._v(" "),c("li",[v._v("使用"),c("code",[v._v("clean-css")]),v._v("对"),c("code",[v._v("css")]),v._v("进行压缩；")])])]),v._v(" "),c("li",[c("p",[c("code",[v._v("js")]),v._v("压缩与混乱（丑化）")]),v._v(" "),c("ul",[c("li",[v._v("无效字符的删除（空格，回车等）")]),v._v(" "),c("li",[v._v("删除注释")]),v._v(" "),c("li",[v._v("使用"),c("code",[v._v("uglify.js2")]),v._v("对"),c("code",[v._v("js")]),v._v("进行压缩。")])])])]),v._v(" "),c("ol",{attrs:{start:"2"}},[c("li",[v._v("合并请求")])]),v._v(" "),c("ul",[c("li",[c("p",[v._v("不合并请求的缺点：")]),v._v(" "),c("ul",[c("li",[v._v("文件和文件之间有插入的上行请求，会增加"),c("code",[v._v("N-1")]),v._v("个网络延迟")]),v._v(" "),c("li",[v._v("受丢包问题的影响更严重：因为每次请求都可能出现丢包的情况，减少请求能有效减少丢包的情况。")]),v._v(" "),c("li",[c("code",[v._v("keep-alive")]),v._v("本身也存在问题：经过代理服务器时可能会断开。")])])]),v._v(" "),c("li",[c("p",[v._v("文件合并的问题：")]),v._v(" "),c("ul",[c("li",[v._v("首屏渲染问题：当请求"),c("code",[v._v("js")]),v._v("文件的时候，如果页面渲染只依赖"),c("code",[v._v("a.js")]),v._v("文件，由于合并文件，需要等待合并后的"),c("code",[v._v("a-b-c.js")]),v._v("文件请求回来才能继续渲染，这样就会导致页面渲染速度变慢。")]),v._v(" "),c("li",[v._v("缓存失效问题：合并后的文件"),c("code",[v._v("a-b-c.js")]),v._v("中只要其中一个文件（比如"),c("code",[v._v("a.js")]),v._v("）发生变化，那么整个合并文件都将失效，而不采用文件合并就不会出现这种情况；")])])]),v._v(" "),c("li",[c("p",[v._v("使用建议")]),v._v(" "),c("ul",[c("li",[v._v("公共库合并：将不经常发生变化的公共组件库文件合并；")]),v._v(" "),c("li",[v._v("将不同页面的"),c("code",[v._v("js")]),v._v("文件单独合并：比如在单页面应用"),c("code",[v._v("SPA")]),v._v("中，当路由跳转到具体页面时才请求该页面需要的"),c("code",[v._v("js")]),v._v("文件；")])])])]),v._v(" "),c("ol",{attrs:{start:"3"}},[c("li",[c("h2",{attrs:{id:"图片相关的优化"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#图片相关的优化"}},[v._v("#")]),v._v(" 图片相关的优化")])]),v._v(" "),c("li",[c("p",[v._v("使用"),c("code",[v._v("CDN")])])])]),v._v(" "),c("blockquote",[c("p",[v._v("大型"),c("code",[v._v("Web")]),v._v("应用对速度的追求并没有止步于仅仅利用浏览器缓存，因为浏览器缓存始终只是为了提升二次访问的速度，对于首次访问的加速，我们需要从网络层面进行优化，最常见的手段就是"),c("code",[v._v("CDN")]),v._v("（"),c("code",[v._v("Content Delivery Network")]),v._v("，内容分发网络）加速。通过将静态资源(例如"),c("code",[v._v("javascript")]),v._v("，"),c("code",[v._v("css")]),v._v("，图片等等）缓存到离用户很近的相同网络运营商的"),c("code",[v._v("CDN")]),v._v("节点上，不但能提升用户的访问速度，还能节省服务器的带宽消耗，降低负载。")])]),v._v(" "),c("div",{staticClass:"custom-block tip"},[c("p",{staticClass:"custom-block-title"},[v._v("TIP")]),v._v(" "),c("p",[c("code",[v._v("CDN")]),v._v("怎么做到加速的呢？")]),v._v(" "),c("blockquote",[c("p",[v._v("其实这是"),c("code",[v._v("CDN")]),v._v("服务商在全国各个省份部署计算节点，"),c("code",[v._v("CDN")]),v._v("加速将网站的内容缓存在网络边缘,不同地区的用户就会访问到离自己最近的相同网络线路上的"),c("code",[v._v("CDN")]),v._v("节点，当请求达到"),c("code",[v._v("CDN")]),v._v("节点后，节点会判断自己的内容缓存是否有效，如果有效，则立即响应缓存内容给用户，从而加快响应速度。如果"),c("code",[v._v("CDN")]),v._v("节点的缓存失效，它会根据服务配置去我们的内容源服务器获取最新的资源响应给用户，并将内容缓存下来以便响应给后续访问的用户。因此，一个地区内只要有一个用户先加载资源，在"),c("code",[v._v("CDN")]),v._v("中建立了缓存，该地区的其他后续用户都能因此而受益。")])]),v._v(" "),c("p",[v._v("简单来说"),c("code",[v._v("CDN")]),v._v("是构建在现有网络基础之上的智能虚拟网络，依靠部署在各地的边缘服务器，通过中心平台的负载均衡，内容分发，调度等功能模块，使用户就近获取所需内容，降低网络拥塞，提高用户访问响应速度和命中率。"),c("code",[v._v("CDN")]),v._v("关键技术主要有内容存储和分发技术。")]),v._v(" "),c("p",[c("code",[v._v("CDN")]),v._v("是一个经策略性部署的整体系统，包括分布式存储，负载均衡，网络请求的重定向和内容管理4个要件，而内容管理和全局的网络流量管理是"),c("code",[v._v("CDN")]),v._v("的核心所在。通过用户就近性和服务器负载的判断，"),c("code",[v._v("CDN")]),v._v("确保内容以一种极高效的方式为用户的请求提供服务。")])]),v._v(" "),c("div",{staticClass:"custom-block tip"},[c("p",{staticClass:"custom-block-title"},[v._v("TIP")]),v._v(" "),c("p",[c("code",[v._v("CDN")]),v._v("原理：\n"),c("code",[v._v("CDN")]),v._v("网络是在用户和服务器之间增加"),c("code",[v._v("Cache")]),v._v("层")]),v._v(" "),c("ol",[c("li",[v._v("客户端向服务器请求静态资源时，首先会进行"),c("code",[v._v("dns")]),v._v("域名解析，但这里解析出来不是直接返回源站"),c("code",[v._v("ip")]),v._v("，而是解析到一个智能"),c("code",[v._v("dns")]),v._v("服务器")]),v._v(" "),c("li",[v._v("只能"),c("code",[v._v("dns")]),v._v("服务器会将离用户最近的"),c("code",[v._v("cdn")]),v._v("服务器的"),c("code",[v._v("ip")]),v._v("返回给客户端")]),v._v(" "),c("li",[v._v("客户端向"),c("code",[v._v("cdn")]),v._v("服务器索取静态资源，如果该服务器有该静态资源且未过期，则直接返回静态资源给客户端")]),v._v(" "),c("li",[v._v("如果过期了，会向源站询问是否更改，未更改则直接返回该文件并延长有效期。如果源站文件变更，重新从源站获取并缓存到自己的"),c("code",[v._v("cdn")]),v._v("服务器。")]),v._v(" "),c("li",[v._v("源站也可以主动更新"),c("code",[v._v("cdn")]),v._v("网络下的静态资源以确保客户端最快的获取到最新的资源。")])])])])}),[],!1,null,null,null);_.default=o.exports}}]);
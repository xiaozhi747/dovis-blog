(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{434:function(v,_,e){"use strict";e.r(_);var o=e(33),c=Object(o.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h1",{attrs:{id:"http的一些值得记住的知识点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http的一些值得记住的知识点"}},[v._v("#")]),v._v(" http的一些值得记住的知识点")]),v._v(" "),e("h2",{attrs:{id:"tcp和http的一些知识点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tcp和http的一些知识点"}},[v._v("#")]),v._v(" "),e("code",[v._v("TCP")]),v._v("和"),e("code",[v._v("HTTP")]),v._v("的一些知识点")]),v._v(" "),e("blockquote",[e("p",[v._v("现代浏览器和服务器建立了一个"),e("code",[v._v("TCP")]),v._v("连接后是否会在一个"),e("code",[v._v("HTTP")]),v._v("请求完成后断开？什么情况下会断开")])]),v._v(" "),e("p",[v._v("在 "),e("code",[v._v("HTTP/1.0")]),v._v(" 中，一个服务器在发送完一个 "),e("code",[v._v("HTTP")]),v._v(" 响应后，会断开 "),e("code",[v._v("TCP")]),v._v(" 链接。但是这样每次请求都会重新建立和断开 "),e("code",[v._v("TCP")]),v._v(" 连接，代价过大。所以虽然标准中没有设定，某些服务器对 "),e("code",[v._v("Connection: keep-alive")]),v._v(" 的 "),e("code",[v._v("Header")]),v._v(" 进行了支持。意思是说，完成这个 "),e("code",[v._v("HTTP")]),v._v(" 请求之后，不要断开 "),e("code",[v._v("HTTP")]),v._v(" 请求使用的 "),e("code",[v._v("TCP")]),v._v(" 连接。这样的好处是连接可以被重新使用，之后发送 "),e("code",[v._v("HTTP")]),v._v(" 请求的时候不需要重新建立 "),e("code",[v._v("TCP")]),v._v(" 连接，以及如果维持连接，那么 "),e("code",[v._v("SSL")]),v._v(" 的开销也可以避免。")]),v._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[v._v("TIP")]),v._v(" "),e("p",[v._v("持久连接：既然维持 "),e("code",[v._v("TCP")]),v._v(" 连接好处这么多，"),e("code",[v._v("HTTP/1.1")]),v._v(" 就把 "),e("code",[v._v("Connection")]),v._v(" 头写进标准，并且默认开启持久连接，除非请求中写明 "),e("code",[v._v("Connection: close")]),v._v("，那么浏览器和服务器之间是会维持一段时间的 "),e("code",[v._v("TCP")]),v._v(" 连接，不会一个请求结束就断掉。")])]),v._v(" "),e("blockquote",[e("p",[v._v("一个"),e("code",[v._v("TCP")]),v._v("连接可以对应几个"),e("code",[v._v("HTTP")]),v._v("请求")])]),v._v(" "),e("p",[v._v("如果维持连接，一个 "),e("code",[v._v("TCP")]),v._v(" 连接是可以发送多个 "),e("code",[v._v("HTTP")]),v._v(" 请求的。")]),v._v(" "),e("blockquote",[e("p",[v._v("一个 "),e("code",[v._v("TCP")]),v._v(" 连接中 "),e("code",[v._v("HTTP")]),v._v(" 请求发送可以一起发送么（比如一起发三个请求，再三个响应一起接收）？")])]),v._v(" "),e("p",[e("code",[v._v("HTTP/1.1")]),v._v(" 存在一个问题，单个 "),e("code",[v._v("TCP")]),v._v(" 连接在同一时刻只能处理一个请求，意思是说：两个请求的生命周期不能重叠，任意两个 "),e("code",[v._v("HTTP")]),v._v(" 请求从开始到结束的时间在同一个 "),e("code",[v._v("TCP")]),v._v(" 连接里不能重叠。虽然 "),e("code",[v._v("HTTP/1.1")]),v._v(" 规范中规定了管线化来试图解决这个问题，但是这个功能在浏览器中默认是关闭的。")]),v._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[v._v("TIP")]),v._v(" "),e("p",[v._v("由于 "),e("code",[v._v("HTTP/1.1")]),v._v(" 是个文本协议，同时返回的内容也并不能区分对应于哪个发送的请求，所以顺序必须维持一致。比如你向服务器发送了两个请求"),e("code",[v._v("GET /query?q=A")]),v._v("和 "),e("code",[v._v("GET /query?q=B")]),v._v("，服务器返回了两个结果，浏览器是没有办法根据响应结果来判断响应对应于哪一个请求的。")]),v._v(" "),e("p",[v._v("连接头阻塞：在建立起一个 "),e("code",[v._v("TCP")]),v._v(" 连接之后，假设客户端在这个连接连续向服务器发送了几个请求。按照标准，服务器应该按照收到请求的顺序返回结果，假设服务器在处理首个请求时花费了大量时间，那么后面所有的请求都需要等着首个请求结束才能响应。所以现代浏览器默认是不开启 "),e("code",[v._v("HTTP Pipelining(管线化)")]),v._v(" 的。")]),v._v(" "),e("p",[v._v("在 "),e("code",[v._v("HTTP2")]),v._v(" 中由于 "),e("code",[v._v("Multiplexing")]),v._v(" 特点的存在，多个 "),e("code",[v._v("HTTP")]),v._v(" 请求可以在同一个 "),e("code",[v._v("TCP")]),v._v(" 连接中并行进行。")]),v._v(" "),e("p",[v._v("所以在"),e("code",[v._v("http1.1")]),v._v("时代浏览器提高页面加载效率就是通过：")]),v._v(" "),e("ul",[e("li",[v._v("维持和服务器已经建立的"),e("code",[v._v("TCP")]),v._v("连接，在同一个连接上顺序处理多个请求。")]),v._v(" "),e("li",[v._v("和服务器建立多个"),e("code",[v._v("tcp")]),v._v("连接。")])])]),v._v(" "),e("blockquote",[e("p",[v._v("为什么有的时候不需要重新建立"),e("code",[v._v("SSL")]),v._v("连接("),e("code",[v._v("https")]),v._v("下的)")])]),v._v(" "),e("p",[e("code",[v._v("TCP")]),v._v(" 连接有的时候会被浏览器和服务端维持一段时间。"),e("code",[v._v("TCP")]),v._v(" 不需要重新建立，"),e("code",[v._v("SSL")]),v._v(" 自然也会用之前的。")]),v._v(" "),e("blockquote",[e("p",[v._v("收到的 "),e("code",[v._v("HTML")]),v._v(" 如果包含几十个图片标签，这些图片是以什么方式、什么顺序、建立了多少连接、使用什么协议被下载下来的呢？")])]),v._v(" "),e("p",[v._v("如果图片都是 "),e("code",[v._v("HTTPS")]),v._v(" 连接并且在同一个域名下，那么浏览器在 "),e("code",[v._v("SSL")]),v._v(" 握手之后会和服务器商量能不能用 "),e("code",[v._v("HTTP2")]),v._v(" ，如果能的话就使用 "),e("code",[v._v("Multiplexing")]),v._v(" 功能在这个连接上进行多路传输。不过也未必会所有挂在这个域名的资源都会使用一个 "),e("code",[v._v("TCP")]),v._v(" 连接去获取，但是可以确定的是 "),e("code",[v._v("Multiplexing")]),v._v(" 很可能会被用到。")]),v._v(" "),e("p",[v._v("如果发现用不了 "),e("code",[v._v("HTTP2")]),v._v(" 呢？或者用不了 "),e("code",[v._v("HTTPS（现实中的")]),v._v(" "),e("code",[v._v("HTTP2")]),v._v(" 都是在 "),e("code",[v._v("HTTPS")]),v._v(" 上实现的，所以也就是只能使用 "),e("code",[v._v("HTTP/1.1")]),v._v(" ）。那浏览器就会在一个 "),e("code",[v._v("HOST")]),v._v(" 上建立多个 "),e("code",[v._v("TCP")]),v._v(" 连接，连接数量的最大限制取决于浏览器设置，这些连接会在空闲的时候被浏览器用来发送新的请求，如果所有的连接都正在发送请求呢？那其他的请求就只能等等了。")]),v._v(" "),e("blockquote",[e("p",[v._v("长连接是一种永久连接吗？")])]),v._v(" "),e("p",[v._v("事实上，长连接并不是一种永久连接。在长连接建立后，如果有一段时间没有发出"),e("code",[v._v("HTTP")]),v._v("请求，那么这个长连接就会断开。这个超时的时间可以在"),e("code",[v._v("header")]),v._v("中设置。")])])}),[],!1,null,null,null);_.default=c.exports}}]);
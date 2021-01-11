# https的工作原理
`HTTPS`并非是应用层一个新的协议，通常 `HTTP` 直接和 `TCP` 通信，`HTTPS`则先和安全层（`SSL/TLS`）通信，然后安全层再和 `TCP` 层通信。

`SSL/TLS`是怎么解决`HTTP`存在的问题的：
+ `HTTP`存在的问题
    - 窃听风险：通信使用明文（不加密），内容可能会被窃听（第三方可能获取通信内容）
    - 冒充风险：不验证通信方的身份，因此有可能遭遇伪装
    - 篡改风险：无法证明报文的完整性，所以有可能已经遭遇篡改

+ `SSL/TLS`解决：
    - 所有的信息都是加密传输的，第三方无法窃听
    - 配备身份验证，防止身份被冒充
    - 具有校验机制，一旦被篡改，通信双方会立刻发现。

## 加密
### 对此加密
> 在每次数据传输之前，小服会先传输给小客一把密钥，然后小服在之后给小客发消息的过程中，会用这把密钥对这些消息进行加密。小客在收到这些消息后，会用之前小服给的那把密钥对这些消息进行解密，这样，小客就能得到密文里面真正的数据了。如果小客要给小服发消息，也同样用这把密钥来对消息进行加密，小服收到后也用这把密钥进行解密。 

加密和解密用同一个密钥的方式称为共享密钥加密，也被叫做对称密钥加密。

![img](/dovis-blog/other/25.jpg)

- 浏览器发送给服务端 `client_random` 和一系列加密方法
- 服务端发送给浏览器 `server_random` 和加密方法

> 现有浏览器和服务器有了三个相同的凭证：`client_random`、`server_random`和加密方法 用加密方法把` client_random`、`server_random` 两个随机数混合起来，生成秘钥，这个密钥就是浏览器和服务端通信的暗号。
存在的问题：第三方可以在中间获取到`client_random`、`server_random`和加密方法，由于这个加密方法同时可以解密，所以中间人可以成功对暗号进行解密，拿到数据，很容易就将这种加密方式破解了。

### 非对称加密
> 在每次数据传输之前，小服会先传输给小客一把密钥，然后小服在之后给小客发消息的过程中，会用这把密钥对这些消息进行加密。小客在收到这些消息后，会用之前小服给的那把密钥对这些消息进行解密，这样，小客就能得到密文里面真正的数据了。如果小客要给小服发消息，也同样用这把密钥来对消息进行加密，小服收到后也用这把密钥进行解密。 

![img](/dovis-blog/other/26.jpg)

- 浏览器发送给服务器端一系列加密方法
- 服务端发送给浏览器加密方法和公钥

> 之后浏览器通过公钥将数据加密传输给服务端，服务端收到数据使用私钥进行解密。服务端给浏览器发送数据，则使用私钥进行加密，浏览器收到服务端发送过来的数据，使用公钥进行解密。

存在的问题：
1. 非对称加密效率太低：会严重影响解密的速度，进而影响到用户打开页面的速度。
2. 无法保证服务器发送给浏览器的数据安全，服务器的数据只能用私钥进行加密（因为如果它用公钥那么浏览器也没法解密），中间人一旦拿到公钥，就可以对服务端传来的数据进行解密了，就这样又被破解了。

### HTTPS使用两种加密结合
传输数据阶段依然使用对称加密，但是对称加密的密钥我们采用非对称加密传输。**`HTTPS` 协议之所以是安全的是因为 `HTTPS` 协议会对传输的数据进行加密，而加密过程是使用了非对称加密实现。但其实，`HTTPS` 在内容传输的加密上使用的是对称加密，非对称加密只作用在证书验证阶段。**

![img](/dovis-blog/other/27.jpg)

- 浏览器向服务器发送`client_random`和加密方法列表
- 服务器收到，返回`server_random`，加密方法和公钥
- 浏览器接收，接着生成另一个随机数`pre_master`，并且公公钥加密，传给服务器。
- 服务器用私钥解密这个被加密后的`pre_master`

> 到此为止，服务器和浏览器就有了相同的  `client_random`、`server_random` 和 `pre_master`, 然后服务器和浏览器会使用这三组随机数生成对称秘钥。有了对称秘钥之后，双方就可以使用对称加密的方式来传输数据了。

## CA（数字证书）需要做什么
+ 证书包含的信息
    - 颁发机构信息
    - 公钥
    - 公司信息
    - 域名
    - 有效期
    - 指纹
    - ...

我们在申请一个 `https` 证书的时候，要在市场上选择一家 `CA` 来给你签发证书，那么 `CA` 的工作是什么呢？

> `CA` 要验证这个域名真的是你的：通常就是通过 `DNS` 记录或者就是你在指定 `URI` 下放置一个特殊文件，让 `CA` 可以在外网环境下访问到它。

对于浏览器来说，数字证书有两个作用：
- 通过数字证书向浏览器证明服务器的身份
- 数字证书里面包含了服务器公钥



相比于不含数字证书的`HTTPS`请求流程，主要以下两个改动：
- 服务器没有直接返回公钥给浏览器，而是返回了数字证书，而公钥正是包含数字证书中的；
- 在浏览器端多了一个证书验证的操作，验证了证书之后，才继续后序流程。

## HTTPS验证过程

![img](/dovis-blog/other/28.jpg)

1. 证书验证阶段
- 浏览器发起`HTTPS`请求
- 服务端返回`HTTPS`证书
- 客户端验证证书是否合法，如果不合法则提示告警。

::: tip
- 浏览器如何验证证书的合法性？

> 浏览器发起 `HTTPS` 请求时，服务器会返回网站的 `SSL` 证书，浏览器需要对证书做以下验证：

1. 验证域名，有效期等信息是否正确。证书上都包含这些信息，比较容易完成验证。
2. 判断证书是否合法。每份签发证书都可以根据验证链查找到对应的根证书，操作系统，浏览器会在本地存储权威机构的根证书，利用本地根证书可以对对应机构签发证书来完成源验证；
3. 判断证书是否被篡改。需要和`CA`服务器进行校验。
4. 判断证书是否已吊销。通过`CRL`和`OCSP`实现，其中`OCSP`可以用于第三步以减少和`CA`服务器的交互，提高验证效率。

- 证书是公开的，如果要发起中间人攻击，我在官网上下载一份证书作为我的服务器证书，那客户端肯定会认同这个证书是合法的，如何避免这种证书冒用的情况？

> 其实这就是非加密对称中公私钥的用处，虽然中间人可以得到证书，但私钥是无法获取的，一份公钥是不可能推算出其对应的私钥，中间人即使拿到证书也无法伪装成合法服务端，因为无法对客户端传入的加密数据进行解密。
:::

2. 数据传输阶段
- 当证书验证合法后，在本地生成用于改造对称加密算法的随机数
- 通过公钥加密随机数，并把加密后的随机数传输到服务端
- 服务端通过私钥对随机数进行解密
- 服务端通过客户端传入的随机数构造对称加密算法，对返回结果内容进行加密后传输。

> 验证通过后本地生成用于改造对称加密算法的随机数，通过证书中的公钥对随机数进行加密传输到服务端，服务端接收后通过私钥解密得到随机数，之后的数据交互通过对称加密算法进行加解密。

::: tip
- 为什么数据传输是用对称加密

> 首先，非对称加密的加解密效率是非常低的，而 `http` 的应用场景中通常端与端之间存在大量的交互，非对称加密的效率是无法接受的；另外，在 `HTTPS` 的场景中只有服务端保存了私钥，一对公私钥只能实现单向的加解密，所以 `HTTPS` 中内容传输加密采取的是对称加密，而不是非对称加密。

- 为什么需要CA认证机构颁发证书
> `HTTP` 协议被认为不安全是因为传输过程容易被监听者勾线监听、伪造服务器，而 `HTTPS` 协议主要解决的便是网络传输的安全性问题。首先我们假设不存在认证机构，任何人都可以制作证书，这带来的安全风险便是经典的 “中间人攻击” 问题。 
:::

## `HTTPS`连接建立过程
> `HTTPS` 连接建立过程和 `HTTP` 差不多，区别在于 `HTTP`（默认端口 `80`） 请求只要在 `TCP` 连接建立后就可以发起，而 `HTTPS`（默认端口 `443`） 在 `TCP` 连接建立后，还需要经历 `SSL` 协议握手，成功后才能发起请求。

简化版`SSL`握手

![img](/dovis-blog/other/76.png)
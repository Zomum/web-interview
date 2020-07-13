(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{370:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[a("a",{attrs:{href:"https://juejin.im/post/5c8e6fa8e51d453ec75168cd",target:"_blank",rel:"noopener noreferrer"}},[t._v("深入了解浏览器存储--从cookie到WebStorage、IndexedDB"),a("OutboundLink")],1)]),t._v(" "),a("h4",{attrs:{id:"cookie"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cookie"}},[t._v("#")]),t._v(" Cookie")]),t._v(" "),a("h5",{attrs:{id:"来源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#来源"}},[t._v("#")]),t._v(" 来源")]),t._v(" "),a("p",[t._v("Cookie 的本职工作并非本地存储，而是“维持状态”。 因为HTTP协议是无状态的，HTTP协议自身不对请求和响应之间的通信状态进行保存。它附着在 HTTP 请求上，在浏览器和服务器之间“飞来飞去”。它可以携带用户信息，当服务器检查 Cookie 的时候，便可以获取到客户端的状态。")]),t._v(" "),a("h5",{attrs:{id:"应用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#应用场景"}},[t._v("#")]),t._v(" 应用场景")]),t._v(" "),a("p",[t._v("Cookie指某些网站为了辨别用户身份而储存在用户本地终端上的数据(通常经过加密)。 cookie是服务端生成，客户端进行维护和存储。"),a("strong",[t._v("以键值对的形式存在")]),t._v("。")]),t._v(" "),a("h5",{attrs:{id:"cookie的原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cookie的原理"}},[t._v("#")]),t._v(" Cookie的原理")]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"img/A9AE09C5-021A-4F6E-900C-71CC9F533FAF.png",alt:"A9AE09C5-021A-4F6E-900C-71CC9F533FAF"}}),t._v(" "),a("p",[t._v("第一次访问网站的时候，浏览器发出请求，服务器响应请求后，会在响应头里面添加一个Set-Cookie选项，将cookie放入到响应请求中，在浏览器第二次发请求的时候，会通过Cookie请求头部将Cookie信息发送给服务器，服务端会辨别用户身份，另外，Cookie的过期时间、域、路径、有效期、适用站点都可以根据需要来指定。")]),t._v(" "),a("h5",{attrs:{id:"生成方式主要有两种："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生成方式主要有两种："}},[t._v("#")]),t._v(" 生成方式主要有两种：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("生成方式一：http response header中的set-cookie")])]),t._v(" "),a("li",[a("p",[t._v("生成方式二：js中可以通过document.cookie可以读写cookie，以键值对的形式展示")])])]),t._v(" "),a("p",[t._v("cookie数据还有路径（path）的概念，可以限制cookie只属于某个路径下或哪个域名下。")]),t._v(" "),a("h5",{attrs:{id:"cookie的缺陷"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cookie的缺陷"}},[t._v("#")]),t._v(" Cookie的缺陷")]),t._v(" "),a("ul",[a("li",[t._v("Cookie 不够大")])]),t._v(" "),a("blockquote",[a("p",[t._v("Cookie的大小限制在4KB左右，对于复杂的存储需求来说是不够用的。当 Cookie 超过 4KB 时，它将面临被裁切的命运。这样看来，Cookie 只能用来存取少量的信息。此外很多浏览器对一个站点的cookie个数也是有限制的。开始每个域名最多20个，后期近一步提升，ie50个，Opera30个， Safari 和 Chrome没有限制")])]),t._v(" "),a("ul",[a("li",[t._v("过多的 Cookie 会带来巨大的性能浪费")])]),t._v(" "),a("blockquote",[a("p",[t._v("Cookie 是紧跟域名的。同一个域名下的所有请求，都会携带 Cookie。大家试想，如果我们此刻仅仅是请求一张图片或者一个 CSS 文件，我们也要携带一个 Cookie 跑来跑去（关键是 Cookie 里存储的信息并不需要），这是一件多么劳民伤财的事情。Cookie 虽然小，请求却可以有很多，随着请求的叠加，这样的不必要的 Cookie 带来的开销将是无法想象的。")])]),t._v(" "),a("ul",[a("li",[t._v("由于在HTTP请求中的Cookie是明文传递的，所以安全性成问题，除非用HTTPS。")])]),t._v(" "),a("h5",{attrs:{id:"安全"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安全"}},[t._v("#")]),t._v(" 安全")]),t._v(" "),a("h5",{attrs:{id:""}},[a("a",{staticClass:"header-anchor",attrs:{href:"#"}},[t._v("#")]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"img/074B0A14-1102-4D2C-828A-7A89434F6F98.png",alt:"074B0A14-1102-4D2C-828A-7A89434F6F98"}})]),t._v(" "),a("h4",{attrs:{id:"localstorage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#localstorage"}},[t._v("#")]),t._v(" LocalStorage")]),t._v(" "),a("h5",{attrs:{id:"特点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#特点"}},[t._v("#")]),t._v(" 特点")]),t._v(" "),a("ul",[a("li",[t._v("保存的数据长期存在，下一次访问该网站的时候，网页可以直接读取以前保存的数据。")]),t._v(" "),a("li",[t._v("大小为5M左右")]),t._v(" "),a("li",[t._v("仅在客户端使用，不和服务端进行通信")]),t._v(" "),a("li",[t._v("接口封装较好")])]),t._v(" "),a("h5",{attrs:{id:"存入-读取数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#存入-读取数据"}},[t._v("#")]),t._v(" 存入/读取数据")]),t._v(" "),a("p",[t._v("以“键值对”的形式存储。所有的数据都是以文本格式保存。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("localStorage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  localStorage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("setItem（"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'world'")]),t._v("）\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("localStorage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getItem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h4",{attrs:{id:"sessionstorage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sessionstorage"}},[t._v("#")]),t._v(" sessionStorage")]),t._v(" "),a("p",[t._v("sessionStorage保存的数据用于浏览器的一次会话，当会话结束（通常是该窗口关闭），数据被清空；sessionStorage 特别的一点在于，"),a("strong",[t._v("即便是相同域名下的两个页面，只要它们不在同一个浏览器窗口中打开，那么它们的 sessionStorage 内容便无法共享")]),t._v("；localStorage 在所有同源窗口中都是共享的；cookie也是在所有同源窗口中都是共享的。除了保存期限的长短不同，SessionStorage的属性和方法与LocalStorage完全一样。")]),t._v(" "),a("h5",{attrs:{id:"特点-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#特点-2"}},[t._v("#")]),t._v(" 特点")]),t._v(" "),a("ul",[a("li",[t._v("会话级别的浏览器存储")]),t._v(" "),a("li",[t._v("大小为5M左右")]),t._v(" "),a("li",[t._v("仅在客户端使用，不和服务端进行通信")]),t._v(" "),a("li",[t._v("接口封装较好")])]),t._v(" "),a("blockquote",[a("p",[t._v("Web Storage 是对 Cookie 的拓展，它只能用于存储少量的简单数据。当遇到大规模的、结构复杂的数据时，Web Storage 也爱莫能助了。")])]),t._v(" "),a("h4",{attrs:{id:"indexeddb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#indexeddb"}},[t._v("#")]),t._v(" IndexedDB")]),t._v(" "),a("p",[t._v("IndexedDB 是一种低级API，"),a("strong",[t._v("用于客户端存储大量结构化数据(包括文件和blobs)")]),t._v("。该API使用索引来实现对该数据的高性能搜索。IndexedDB 是一个运行在浏览器上的非关系型数据库。既然是数据库了，那就不是 5M、10M 这样小打小闹级别了。理论上来说，IndexedDB 是没有存储上限的（一般来说不会小于 250M）。它不仅可以存储字符串，还可以存储二进制数据。")]),t._v(" "),a("h5",{attrs:{id:"特点-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#特点-3"}},[t._v("#")]),t._v(" 特点")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("键值对储存。")]),t._v(" "),a("blockquote",[a("p",[t._v("所有类型的数据都可以直接存入，包括 JavaScript 对象。")])])]),t._v(" "),a("li",[a("p",[t._v("异步。")]),t._v(" "),a("blockquote",[a("p",[t._v("IndexedDB是异步的，操作时不会锁死浏览器，LocalStorage是同步的。")])])]),t._v(" "),a("li",[a("p",[t._v("支持事务。")]),t._v(" "),a("blockquote",[a("p",[t._v("这意味着一系列操作步骤之中，只要有一步失败，整个事务就都取消，数据库回滚到事务发生之前的状态，不存在只改写一部分数据的情况。")])])]),t._v(" "),a("li",[a("p",[t._v("同源限制")]),t._v(" "),a("blockquote",[a("p",[t._v("受到同源限制，每一个数据库对应创建它的域名。网页只能访问自身域名下的数据库，而不能访问跨域的数据库。")])])]),t._v(" "),a("li",[a("p",[t._v("储存空间大")]),t._v(" "),a("blockquote",[a("p",[t._v("储存空间比 LocalStorage 大得多，一般来说不少于 250MB，甚至没有上限。")])])]),t._v(" "),a("li",[a("p",[t._v("支持二进制储存。")]),t._v(" "),a("blockquote",[a("p",[t._v("不仅可以储存字符串，还可以储存二进制数据（ArrayBuffer 对象和 Blob 对象）。")])])])]),t._v(" "),a("h5",{attrs:{id:"常见操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见操作"}},[t._v("#")]),t._v(" 常见操作")]),t._v(" "),a("p",[t._v("在IndexedDB大部分操作并不是我们常用的调用方法，返回结果的模式，而是请求——响应的模式。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("openDB")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" request"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("indexedDB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//建立打开IndexedDB")]),t._v("\n\trequest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onerror")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'open indexdb error'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\trequest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onsuccess")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tmyDB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("db"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("result"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//这是一个 IDBDatabase对象，这就是IndexedDB对象")]),t._v("\n\t\tconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("myDB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("db"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//此处就可以获取到db实例")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" myDB"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tname"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'testDB'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tversion"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tdb"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("openDB")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("myDB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("closeDB")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("db")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    db"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("close")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//关闭IndexedDB")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("deleteDB")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  indexedDB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("deleteDatabase")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//删除IndexedDB")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("h4",{attrs:{id:"webstorage、cookie-和-indexeddb之间的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webstorage、cookie-和-indexeddb之间的区别"}},[t._v("#")]),t._v(" WebStorage、cookie 和 IndexedDB之间的区别")]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"img/ECEEF2CE-5F36-468F-9287-19A9873104A6.png",alt:"ECEEF2CE-5F36-468F-9287-19A9873104A6"}}),t._v(" "),a("hr"),t._v(" "),a("h4",{attrs:{id:"localstorage和cookie的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#localstorage和cookie的区别"}},[t._v("#")]),t._v(" localstorage和cookie的区别")]),t._v(" "),a("p",[t._v("共同点：都是保存在浏览器端，且都遵循同源策略。")]),t._v(" "),a("p",[t._v("区别：在于生命周期与作用域的不同")]),t._v(" "),a("ul",[a("li",[t._v("cookie数据始终在同源的http请求中携带（即使不需要），即cookie在浏览器和服务器间来回传递；cookie数据还有路径（path）的概念，可以限制cookie只属于某个路径下。存储大小限制也不同，cookie数据不能超过4k，同时因为每次http请求都会携带cookie，所以cookie只适合保存很小的数据，如会话标识。")]),t._v(" "),a("li",[t._v("而sessionStorage和localStorage不会自动把数据发给服务器，仅在本地保存。sessionStorage和localStorage 虽然也有存储大小的限制，但比cookie大得多，可以达到5M或更大。")]),t._v(" "),a("li",[t._v("数据有效期不同，sessionStorage：仅在当前浏览器窗口关闭前有效，自然也就不可能持久保持；localStorage：始终有效，窗口或浏览器关闭也一直保存，因此用作持久数据；cookie只在设置的cookie过期时间之前一直有效，即使窗口或浏览器关闭。")]),t._v(" "),a("li",[t._v("作用域不同，sessionStorage不在不同的浏览器窗口中共享，即使是同一个页面；localStorage 在所有同源窗口中都是共享的；cookie也是在所有同源窗口中都是共享的。Web Storage 支持事件通知机制，可以将数据更新的通知发送给监听者。Web Storage 的 api 接口使用更方便。")])]),t._v(" "),a("hr"),t._v(" "),a("h5",{attrs:{id:"用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用法"}},[t._v("#")]),t._v(" 用法")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//cookie")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//http请求里设置")]),t._v("\nSet"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Cookie"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("a3fWa"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" Expires"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Wed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),t._v(" Oct "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2018")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("07")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("28")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("00")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("GMT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//可以指定一个特定的过期时间（Expires）或有效期（Max-Age）")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//js")]),t._v("\ndocument"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cookie"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'age=20;domain=.baidu.com'")]),t._v("\n")])])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//localStorage")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("localStorage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  localStorage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("setItem（"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'world'")]),t._v("）\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("localStorage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getItem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nlocalStorage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeItem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//sessionStorage")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sessionStorage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  sessionStorage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setItem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"key"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"value"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" lastname "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sessionStorage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getItem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"key"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nsessionStorage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeItem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"key"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nsessionStorage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("clear")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{355:function(_,t,v){_.exports=v.p+"assets/img/169c39cc18e7592a.d63c15fe.png"},365:function(_,t,v){"use strict";v.r(t);var s=v(42),e=Object(s.a)({},(function(){var _=this,t=_.$createElement,s=_._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[s("h4",{attrs:{id:"三次握手"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三次握手"}},[_._v("#")]),_._v(" 三次握手")]),_._v(" "),s("p",[_._v("开始客户端处于closed状态，服务端处于listen[ˈlɪsn]状态")]),_._v(" "),s("p",[_._v("1、第一次握手：客户端给服务端发送SYN [sɪn]报文，并初始化序列号ISN。此时客户端处于SYN_Send状态。")]),_._v(" "),s("p",[_._v("2、第二次握手：服务器收到SYN报文后，会以自己的SYN报文应答，并也指定了初始化序列号ISN。同时把客户端的syn+1作为ACK[ˈæk] ，表示接受到了客户端的SYN，服务器处于SYN_RECEIVED[rɪˈsiːvd] 状态")]),_._v(" "),s("p",[_._v("3、第三次握手：客户端收到SYN报文后，会发送ACK报文，同样也是把服务器端SYN + 1 作为ACK的值。此时客户端处于 establised [ɪˈstæblɪʃt] 状态。")]),_._v(" "),s("p",[_._v("4、服务器收到ACK报文后，也处于establised 状态，双方以建立起了链接。")]),_._v(" "),s("blockquote",[s("p",[_._v("ISN 不能固定，攻击者会猜出确认号，不安全。")])]),_._v(" "),s("blockquote",[s("p",[_._v("半连接队列：服务器处于SYN_RECEIVED状态（第二次握手），会放到队列")]),_._v(" "),s("p",[_._v("全连接队列：三次握手完成，会放到全连接队列。")])]),_._v(" "),s("blockquote",[s("p",[_._v("SYN-ACK重传次数，服务器发送SYN-ACK包后(第二次握手)，未收到确认包，进行重传，重传达到最大次数，就会从队列删除。每次重传时间不相同，一般指数增长，1s,2s,4s,8s")])]),_._v(" "),s("blockquote",[s("p",[_._v("三次握手过程中，第三次握手可以携带数据。")])]),_._v(" "),s("h4",{attrs:{id:"四次挥手"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四次挥手"}},[_._v("#")]),_._v(" 四次挥手")]),_._v(" "),s("p",[_._v("刚开始双方都处于establised状态，加入客户端优先发起关闭请求，")]),_._v(" "),s("p",[_._v("1、第一次挥手：客户端发送一个 FIN 报文，报文中会指定一个序列号。客户端处于"),s("strong",[_._v("FIN_WAIT1")]),_._v("状态。")]),_._v(" "),s("p",[_._v("2、第二次握手：服务端接收到FIN报文之后发送ACK报文，且吧客户端的序列号+1作为ACK报文的值，服务器处于CLOSE_WAIT状态。")]),_._v(" "),s("p",[_._v("3、第三次握手：如果服务器也想断开连接了，和客户端第一次握手一样，发送FIN报文，且指定序列号。服务器处于LAST_ACK状态。")]),_._v(" "),s("p",[_._v("4、第四次握手：客户端接收FIN之后，发送ACK报文应答，且把服务器序列号+1作为自己的ACK报文的序列号值，客户端处于TIME_WAIT状态。 需要过一阵子确保服务器收到ACK后才会进入 CLOSED 状态")]),_._v(" "),s("p",[_._v("5、服务器接收ACK报文后，就处于关闭连接了，处于CLOSED状态。")]),_._v(" "),s("blockquote",[s("p",[_._v("为什么客户端发送 ACK 之后不直接关闭，而是要等一阵子才关闭？（TIME_WAIT状态）")]),_._v(" "),s("p",[_._v("要确保服务器是否已经收到了我们的 ACK 报文，如果没有收到的话，服务器会重新发 FIN 报文给客户端，客户端再次收到 ACK 报文之后，就知道之前的 ACK 报文丢失了，然后再次发送 ACK 报文。")])]),_._v(" "),s("blockquote",[s("p",[_._v("时长：至少是一个报文的来回时间。如果过了这个时间没再次收到FIN报文，就说明对方成功接收ACK报文了，然后就处于CLOSED状态")])]),_._v(" "),s("img",{attrs:{src:v(355),alt:"169c39cc18e7592a"}})])}),[],!1,null,null,null);t.default=e.exports}}]);
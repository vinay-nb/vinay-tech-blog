---
title: Working Process of Node.js
date: "2020-06-14T22:12:03.284Z"
description: "Node.js working"
---

Node.js is an open-source and cross-platform runtime that build on top chrome’s v8 JavaScript engine. Basically, now a days it is very popular. Many server uses node.js to run applications.

Why it is so famous?

There are mainly two features that make Node.js famous:

Non blocking I/O
Asynchronous
Non Blocking I/O: Consider a server and a client and the client send the request for some data then the server sends the response to the client. what happens when multiple (I/O) request comes-

Node basically runs a single thread, but what it does when the request comes it sends that request to some other workers, that workers process the request. The request may I/O operation or fetching data from the database or interacting with some other servers to perform the operation. So by this, there is no delay in accepting the request.

Let’s compare it with some other server like tomcat, it has some 200 threads running means it can accept 200 requests what if 210 request comes then that 10 request has to wait for some time. This can be solved by using node.js. But behind the scene, node.js uses libuv library that specially built for node.js and it can be used by other frameworks too. This libuv is built using C language. C internally uses system kernels that have multiple threads. In node.js, we are not using multiple threads. But in behind the node uses multiple thread concept.

Asynchronous: In non-blocking, we have discussed only request but what if client 1 process is completed and the server sends request here comes asynchronous concept. The movement when we get the response node will execute the call back function (event loop). Then sends the response back to the client.

Node is preferred when we have more I/O related operations. As it lags when it is CPU intensive work because of single-threaded. Node.js can handle up to 34k transactions per second with a latency of 2 to 300 milliseconds.

[Buy my products at Amazon](https://www.amazon.in/hz/wishlist/ls/1E3IEQOE8QNI0?ref_=wl_share&tag=vinaytech7-21)

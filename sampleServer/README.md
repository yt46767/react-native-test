#####nodeJS调试教程
http://www.cnblogs.com/dolphinX/archive/2013/12/22/3485345.html

#####node后台启动（调试模式）
bat脚本：
@echo off
cmd.exe
@pause
-------------
dos脚本：
g:
cd G:\react-native\react-native-sample-app-master\sampleServer

npm install -g node-inspector
//启动服务1：
node-inspector --web-port=8888
//启动服务2：
node --debug server.js
-------------
调试控制台：（浏览器访问）
http://127.0.0.1:8888/debug?port=5858

#####app出现问题
1. token过期，app卡住，进不了主页
————nodeJS后台关闭，重新启动
2. nodeJS后台加有断点——debugger;
————需到nodeJS后台删除断点  或  访问http://127.0.0.1:8888/debug?port=5858，执行断点

---
title: 关于Hexo部署(hexo d)错误的解决方法
author: Sunshine.
date: 2024-11-27 22:50:23
audio: true
math: false
categories:
    - [杂谈]
---


从内地放假回到家后，打开电脑准备修改一下博客，突然发现hexo d命令开始报错
```shell
ssh: connect to host ssh.github.com port 443: Connection refused
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.
FATAL Something's wrong. Maybe you can find the solution here: https://hexo.io/docs/troubleshooting.html
Error: Spawn failed
    at ChildProcess.<anonymous> (D:\blog\node_modules\hexo-deployer-git\node_modules\hexo-util\lib\spawn.js:51:21)
    at ChildProcess.emit (node:events:519:28)
    at cp.emit (D:\blog\node_modules\cross-spawn\lib\enoent.js:34:29)
    at ChildProcess._handle.onexit (node:internal/child_process:294:12)
```

解决方案：
打开曾经推送hexo所需要的密钥文件夹，一般都是**C:/用户/用户名/.ssh**,打开后在里面创建文件，名为config不要带后缀，在里面添加
```txt
Host github.com
User 你的github主邮箱
Hostname ssh.github.com
PreferredAuthentications publickey
IdentityFile ~/.ssh/id_rsa
Port 443
```
再执行hexo d就成功啦！

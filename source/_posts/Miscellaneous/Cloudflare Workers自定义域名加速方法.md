---
title: Cloudflare Workers自定义域名加速方法
author: Sunshine.
date: 2024-10-15 22:50:23
audio: true
math: false
categories:
    - [杂谈]
---
---

上一篇帖子讲述了如何给自己的CF Pages项目的自定义域名加速，这篇帖子就来讲述一下如何给CF Workers加速。
# 一 .准备工作
1.**托管在cloudflare**的域名，这里我用’kuiyr.us.kg‘作演示。(注意不要用双向解析域名，也就是这篇文章[双向解析域名(托管到cloudflare)使用方法 (kuiyr0810.github.io)](https://kuiyr0810.github.io/Miscellaneous/%E5%8F%8C%E5%90%91%E8%A7%A3%E6%9E%90%E5%9F%9F%E5%90%8D(%E6%89%98%E7%AE%A1%E5%88%B0cloudflare)%E4%BD%BF%E7%94%A8%E6%96%B9%E6%B3%95/))
2.一个已经搭建好的Workers项目，没错就是这么简单
# 二.教程开始
正常来说，你部署好一个Workers项目时，会进入设置绑定自己的域名，像我这里就是绑定’kuiyr.us.kg‘,!![image.png](https://img.5200810.xyz/file/1735957943166_image.png)
那么，如果**你没有绑定域名，就先不要绑定；如果你绑定了，删除它**，也就是我删除’kuiyr.us.kg‘。
接下来，进入你想绑定的域名的DNS管理中，添加一条CNAME记录，目标指向你找的优选域名![image.png](https://img.5200810.xyz/file/1735958016230_image.png)
保存后，再在侧边栏找见’**Workers路由**‘选项，点击添加路由，![image.png](https://img.5200810.xyz/file/1735958048968_image.png)
路由输入你要添加的优选域名加个符号，我这里就是kuiyr.us.kg/*
假如你的域名是baidu.com
那就是baidu.com/*
![image.png](https://img.5200810.xyz/file/1735958097013_image.png)
Worker选择你部署的Worker项目即可,保存之后即可！
# 三.总结
极其简单，至少比Pages简单！！




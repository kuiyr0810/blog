---
title: Cloudflare Pages自定义域名加速方法
author: Sunshine.
date: 2024-010-10 22:50:23
audio: true
math: false
categories:
    - [杂谈]
---
---


## 一.前言
人称“赛博菩萨”的cloudflare，不仅提供免费的cdn，还提供了Pages和Workers两个免费服务，允许你构建和部署无服务器功能、站点和全栈应用程序，给各位开发者和白嫖怪提供了无比的便利的平台，你可以搭建一个博客，图床，监控面板甚至是一个完整的Ai对话系统，例如github开源的项目[Harry-zklcdc/go-proxy-bingai: 用 Vue3 和 Go 搭建的微软 New Bing 演示站点，拥有一致的 UI 体验，支持 ChatGPT 提示词，支持 API 调用，国内可用。 (github.com)](https://github.com/Harry-zklcdc/go-proxy-bingai)，这个项目你既可用Pages搭建，也可用Workers搭建（好像跑题了doge）。
像这种类似Pages的项目部署后都需要绑定自己的域名，因为其自带的域名已经被国内运营商屏蔽了，接下来我就教大家如何对Pages自定义域名进行cloudflare优选加速。
## 二.准备工作
1.cloudflare账号和一个域名（没有请点击此处[建站初期的免费域名(持续更新) (kuiyr0810.github.io)](https://kuiyr0810.github.io/Miscellaneous/%E5%BB%BA%E7%AB%99%E5%88%9D%E6%9C%9F%E7%9A%84%E5%85%8D%E8%B4%B9%E5%9F%9F%E5%90%8D(%E6%8C%81%E7%BB%AD%E6%9B%B4%E6%96%B0)/)）
2.华为云国际版账号,注册地址：[共建智能世界云底座-华为云 (huaweicloud.com)](https://www.huaweicloud.com/intl/zh-cn/)
3.已经部署的Pages并且已经添加了自定义域名
## 三.教程开始
这里的示例域名我就使用域名：kuiyr.us.kg。当你在添加自定义域名时，他会要求你添加一个dns记录，记录类型为cname，域名指向它提供的二级域名
![image.png](https://img.5200810.xyz/file/1735959564853_image.png)
，正常步骤你在你的DNS服务商处添加这条CNAME记录即可，
![image.png](https://img.5200810.xyz/file/1735959665295_image.png)
然后就激活了。
![image.png](https://img.5200810.xyz/file/1735959711203_image.png)
>双向解析域名按照我上一篇帖子的设置能够直接进行优选,具体请看[双向解析域名(托管到cloudflare)使用方法 (kuiyr0810.github.io)](https://kuiyr0810.github.io/Miscellaneous/%E5%8F%8C%E5%90%91%E8%A7%A3%E6%9E%90%E5%9F%9F%E5%90%8D(%E6%89%98%E7%AE%A1%E5%88%B0cloudflare)%E4%BD%BF%E7%94%A8%E6%96%B9%E6%B3%95/)

非双向解析如何优选呢？
我们先确定好要使用的域名，将其托管在华为云国际版的**云解析DNS**上，![image.png](https://img.5200810.xyz/file/1735959754897_image.png)
点击**公网域名**-->创建公网域名-->输入你要使用的自定义域名（我这里是**kuiyr.us.kg**）。
创建完成后，他会给你自动创建两条记录，一个NS，一个SOA
![image.png](https://img.5200810.xyz/file/1735959789861_image.png)
这时候我们返回cloudflare，创建四个新的NS记录，记录指向华为云DNS服务器，并且删除原来的CNAME记录
![image.png](https://img.5200810.xyz/file/1735959849222_image.png)
![image.png](https://img.5200810.xyz/file/1735959868251_image.png)
cloudflare这边所有工作就完成了，只有四条NS记录。
接下来的步骤全部是在华为云DNS端完成了。
我们继续在华为云端创建一条CNAME记录（**添加记录集**），这条记录为在cloudflare删除的那条记录（就是给你的项目设置自定义域名时的那条记录）；
接下来，再添加一条CNAME记录，这条CNAME记录的线路类型要选择**地域解析**，![image.png](https://img.5200810.xyz/file/1735959893468_image.png)
记录填写你使用的cloudflare优选域名即可！
大功告成！！！
## 四.总结
最后结果
cloudflare端：四条ns记录（指向华为云DNS）
华为云DNS端：一个NS，一个SOA，两个CNAME（一条线路类型为**全网默认**，记录值指向Pages项目自带的二级域名；另一条线路类型为**地域解析**，记录值指向优选域名）










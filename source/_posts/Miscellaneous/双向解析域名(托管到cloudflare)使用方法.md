---
title: 双向解析域名(托管到cloudflare)使用方法
author: Sunshine.
date: 2024-09-27 22:50:23
sticky: true
audio: true
math: false
categories:
    - [杂谈]
---
---

我的这篇帖子[建站初期的免费域名(持续更新) (kuiyr0810.github.io)](https://kuiyr0810.github.io/Miscellaneous/%E5%BB%BA%E7%AB%99%E5%88%9D%E6%9C%9F%E7%9A%84%E5%85%8D%E8%B4%B9%E5%9F%9F%E5%90%8D(%E6%8C%81%E7%BB%AD%E6%9B%B4%E6%96%B0)/)介绍了一些可以白嫖的域名，但是大家会发现，许多域名可以托管到cloudflare（以下简称cf），但是就是无法正常解析，但是注册商自带的DNS解析又能正常，这类域名就是需要双向解析的域名。例如cloudns，1gb.ua(部分类似域名未更新)，接下来我就来介绍如何将这类域名完美托管到cloudflare。

我就用cloudns来举例吧！

# 一.准备工作
## 1.注册域名
像我这里的域名就是“kuiyr.cloudns.be”,
![image.png](https://img.5200810.xyz/file/1741193192550_image.png)
这几条记录我将会一一解释，它们是及其重要的记录。

## 2.找寻cloudflare优选域名
推荐：[CloudFlare公共Cname域名 (182682.xyz)](https://www.182682.xyz/page/cloudflare/cname.html)
测速ping：[在线ping_tcp延迟测试_持续ping_禁ping_tcping_在线tcping_端口延迟测试 (itdog.cn)](https://www.itdog.cn/tcping/)，推荐使用tcping，现在的网站都需要ssl，输入：**域名:443**，然后点击测速即可。
这篇文章我将用**speed.marisalnc.com**这个域名来示例，当然你也可以用其他的（哪个快用哪个）

## 3将已注册的域名托管到cf
如图所示：
![image.png](https://img.5200810.xyz/file/1741193205965_image.png)

接下来，就是详细的托管教程了。
# 二.教程正式开始
首先，在cloudflare端添加一条cname记录，
**cloudflare端：**
![image.png](https://img.5200810.xyz/file/1741193220550_image.png)
名称可以随意（这里我用test），目标指向优选域名，代理状态一定要关闭，仅DNS即可。
然后回到cloudns端，由于托管到cloudflare已经添加了两条DNS记录，
**cloudns端：**
![image.png](https://img.5200810.xyz/file/1741193229173_image.png)
现在我们要添加两条新记录，在cf端实现那条cname解析，
**cloudns端：**
![image.png](https://img.5200810.xyz/file/1741193230650_image.png)
这样，cf端那边的cname解析就生效了。

下一步

在cloudns端再添加一条cname记录，由你的泛域名指向在cf端添加的（像我的就是test.kuiyr.cloudns.be）

```
域名：kuiyr.cloudns.be
泛域名：*.kuiyr.cloudns.be
```

![image.png](https://img.5200810.xyz/file/1735957180684_image.png)
到了现在这一步，其实差不多已经能用了，只要在cf端添加你的子域名指向A，AAAA和cname记录了，
比如：
1.kuiyr.cloudns.be
abc.kuiyr.cloudns.be
xds.kuiyr.cloudns.be
像我这里就会添加，
**cloudflare端：**
![image.png](https://img.5200810.xyz/file/1735957211840_image.png)
ipv4地址添加你服务器公网ip，或者虚拟主机IP或cname到虚拟主机域名就可以正常解析了，代理状态一定要打开！！！
![image.png](https://img.5200810.xyz/file/1735957244463_image.png)
大功告成！！！

# 三.最终优化
双向解析域名还有一个问题，就是cf端的边缘证书不生效，![image.png](https://img.5200810.xyz/file/1735957459189_image.png)
如何让它生效呢？
只需要在cloudns端再添加两条记录，
![image.png](https://img.5200810.xyz/file/1735957499545_image.png)
等待差不多10分钟左右（也可能更长？），边缘证书就生效了。
完结撒花！！！

最终结果，这些必不可删除的记录
**cloudns端：**
![image.png](https://img.5200810.xyz/file/1735957553017_image.png)
**cloudflare端：**
![image.png](https://img.5200810.xyz/file/1735957570757_image.png)
注：
要想使用二级根域名（我的是kuiyr.cloudns.be）,需要在两端都添加相同的A，AAAA或cname记录即可，三级域名只需要在cf端添加。









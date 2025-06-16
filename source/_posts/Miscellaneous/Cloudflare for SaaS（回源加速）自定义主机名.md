---
title: Cloudflare for SaaS（回源加速）自定义主机名
author: Sunshine.
date: 2024-10-22 22:50:23
audio: true
math: false
categories:
    - [杂谈]
---

---


双向解析的域名配置好了可以直接进行优选，那么不能进行双向解析的域名如何进行优选呢？没错，便是Cloudflare自带的**自定义主机名**功能，接下来我就介绍一下如何使用自定义主机名功能来实现优选域名CDN加速！
# 一、准备工作
两个可以托管到cloudflare的域名（我这里使用**5200810.xyz（以下称主域名）**和**kuiyr.ggff.net（辅助域名）**）
  首先，确定好你要使用的主域名，比如说你要在你的云服务器或虚拟主机上绑定的域名。像我要使用'5200810.xyz'作为网站域名。
  再确定好辅助域名，我这里就是'kuiyr.ggff.net'
# 二、教程开始
 1.转到辅助域名的DNS解析，添加两条记录。首先添加一条**CNAME记录**，名称为**cdn**，内容指向你找到的**优选域名**；再添加一条**A记录**或**CNAME记录**（虚拟主机可能用得到CNAME记录），名称填写**origin**，内容指向你**服务器的公网ip**或者**虚拟主机的ip或域名**。结果如下图，![image.png](https://img.5200810.xyz/file/1735958198666_image.png)
 2.在（辅助域名）左侧栏找到选项**SSL/TLS**,点击后找到**自定义主机名**——>**添加回退源**，将origin开头的子域名填入，像我就是‘origin.kuiyr.ggff.net’,![image.png](https://img.5200810.xyz/file/1735958222080_image.png)
 3.再添加自定义主机名，这里就填写你要作为网站的域名，像我这里‘5200810.xyz’，其他选项默认。!
![image.png](https://img.5200810.xyz/file/1735958259467_image.png)
返回界面后会发现，![image.png](https://img.5200810.xyz/file/1735958289599_image.png)
这时候就点击最右边的小三角，会发现他让我们添加两条TXT记录![image.png](https://img.5200810.xyz/file/1735958349126_image.png)
注意是要在**主域名**DNS解析处添加![image.png](https://img.5200810.xyz/file/1735958405326_image.png)
4.TXT记录添加完成后，不要切换，还要添加一条CNAME记录。名称就是**作为网站域名的前缀或者直接@用根域名**，内容填写cdn为前缀的域名，像我这里就是‘cdn.kuiyr.ggff.net’![image.png](https://img.5200810.xyz/file/1735958437294_image.png)
所有关键步骤已经完成！！
接下来等待1~10分钟就大功告成！！![image.png](https://img.5200810.xyz/file/1735958463642_image.png)
 # 三、总结
 辅助域名DNS处：![image.png](https://img.5200810.xyz/file/1735958495106_image.png)
 主域名DNS处：
![image.png](https://img.5200810.xyz/file/1735958503000_image.png)
 
 >一定要注意小黄云的状态!!!!
 >一定要注意小黄云的状态!!!!
 >一定要注意小黄云的状态!!!!
 效果：
![image.png](https://img.5200810.xyz/file/1735958536965_image.png)


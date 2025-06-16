---
title: 记录一下Gihub Pages自定义域名
author: Sunshine.
date: 2024-11-17 22:50:23
audio: true
math: false
categories:
    - [杂谈]
---


# 一、前言
之前也搞过Github Pages自定义域名，后来忘了不知道什么原因删除了。现在又想起来换一个自己想要的好看的域名——"suns.blogu.tc"，“suns”代表我自己，“blog”代表是一个博客，属实是比较完美了！
# 二、教程开始
## 1.验证域名
  准备好你要使用的域名，打开github主页，![image.png](https://img.5200810.xyz/file/1735958670348_image.png)
  点击右上角头像，依次选择![image.png](https://img.5200810.xyz/file/1735958680393_image.png)
  ![image.png](https://img.5200810.xyz/file/1735958706016_image.png)
  进入页面后点击“Add a domain”，输入你要使用的域名并完成**TXT验证**
  ![image.png](https://img.5200810.xyz/file/1735958731638_image.png)

就是在你的dns托管处添加一条TXT记录，
![image.png](https://img.5200810.xyz/file/1735958759528_image.png)
这一步完成后验证域名就算成功了。
>注：DNS解析需要时间，请耐心等待
## 2.添加域名
找到你的博客项目，并进入
![image.png](https://img.5200810.xyz/file/1735959027171_image.png)
点击上方的Settings，在下一个页面找到Pages并点击进入，![image.png](https://img.5200810.xyz/file/1735959037161_image.png)

下拉找到Custom domain
在输入框中填写你要使用的域名（这个域名一定是要验证过的）
然后返回DNS托管商处，添加一条CNAME记录或者一条A记录（ipv4）、AAAA记录（ipv6）
CNAME：
```
指向example.github.io
（example换成你的）
```
A:
```
指向以下四条ip
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```
AAAA：
```
指向以下四条ip
2606:50c0:8000::153
2606:50c0:8001::153
2606:50c0:8002::153
2606:50c0:8003::153
```
这三个方式任选一种即可！！！
像我就要选择添加A记录，![image.png](https://img.5200810.xyz/file/1735959075461_image.png)
## 3.收尾
其次，不知github抽什么风，你还要为你的子域名www.example.com添加一条CNAME记录（否则会有一条黄色提示），指向你的项目名称：example.github.io(example换成你自己的)，![image.png](https://img.5200810.xyz/file/1735959096056_image.png)
然后静静等待生效即可！
>之前是没有这么麻烦的，也许你要使用的域名直接CNAME到你的项目名称可以省略最后一步，有兴趣可以自己测试！
# 三、收尾
最后，你要在你的本地博客文件夹的source文件夹中添加一个CNAME文件，![image.png](https://img.5200810.xyz/file/1735959118944_image.png)这个CNAME文件在你的项目分支中会自动生成，下载到source文件夹中即可，这个文件内容就是你要使用的域名。
这一步可以保证你在更新项目时保持自定义域名，否则还需要手动验证。





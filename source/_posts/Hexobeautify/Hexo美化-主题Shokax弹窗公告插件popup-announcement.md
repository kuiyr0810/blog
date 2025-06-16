---
title: Hexo美化-主题Shokax弹窗公告插件popup-announcement
author: Sunshine.
date: 2025-1-2 22:50:23
audio: true
math: false
sticky: true
categories:
    - [Hexo美化]
---

# 1.前言
想给我的博客增加一个弹窗公告插件，我的博客主题是Shokax,是在原有Shoka主题的基础上继续更新维护的主题，本人使用体验不错。

Shokax主题插件编写文档：
[shokaX主题插件文档](https://www.kaitaku.xyz/webbuild/shokaXplugin/)

本插件只适用于Shokax主题！
所有代码都基于Shokax主题！其他主题自行修改！

本插件为scripts式插件，只可手动安装！

# 2.如何安装
插件安装步骤：
1.在你本地博客根目录添加文件夹(如果没有)：**scripts**，在此文件夹中创建**popup-announcement.js**文件，向里面添加以下代码：
```JAVASCRIPT
hexo.extend.filter.register('theme_inject', function (injects) {
  injects.bodyEnd.file('popup-announcement', 'views/popup-announcement.pug', {}, { cache: true });
  injects.style.push('views/popup-announcement.styl');
});
```
2.继续在你本地博客根目录添加文件夹(如果没有)：**views**，在其中创建**popup-announcement.pug**文件，添加代码如下：
```PUG
//弹窗样式代码，可自行修改
div(id="popup-announcement" class="popup-container hidden")
  div(class="popup-content")
    div(class="popup-header")
      h2 公告
      button#popup-close ✕
    div(class="popup-body")
      p 欢迎访问我的博客！记得订阅哦～
    div(class="popup-footer")
      a(href="https://suns.blogu.tc/about/" target="_blank") 关于Sunshine's blog

//js逻辑代码，可自行修改
script.
  document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('popup-announcement');
    const closeBtn = document.getElementById('popup-close');

    // 显示弹窗时添加动画
    popup.style.opacity = '0';
    popup.style.display = 'block';
    setTimeout(() => {
      popup.style.opacity = '1';
      popup.style.transition = 'opacity 0.5s ease';
    }, 0);

    // 关闭弹窗动画
    closeBtn.addEventListener('click', () => {
      popup.style.opacity = '0';
      setTimeout(() => {
        popup.style.display = 'none';
      }, 500);
    });
  });
```
再创建文件**popup-announcement.styl**，添加代码如下：
```css
/* 弹窗容器：中心定位 */
.popup-container
  position: fixed
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)
  z-index: 1000
  display: none
  width: 90%
  max-width: 400px
  background: rgba(255, 255, 255, 0.15) /* 半透明背景 */
  backdrop-filter: blur(10px) /* 玻璃拟态效果 */
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2)
  border: 1px solid rgba(255, 255, 255, 0.2) /* 白色透明边框 */
  border-radius: 20px
  overflow: hidden
  animation: popup-appear 0.5s ease forwards

/* 弹窗内容 */
.popup-content
  display: flex
  flex-direction: column
  padding: 20px

/* 弹窗头部 */
.popup-header
  display: flex
  justify-content: space-between
  align-items: center
  font-size: 18px
  font-weight: bold
  color: #fff

#popup-close
  background: none
  border: none
  color: #fff
  font-size: 18px
  cursor: pointer
  transition: transform 0.2s ease
  &:hover
    transform: scale(1.2)

/* 弹窗主体 */
.popup-body
  margin: 15px 0
  color: #eee
  font-size: 16px
  text-align: center

.popup-header h2
  text-align: center
  margin: 0 auto
  font-size: 22px
  font-weight: bold
  color: #fff


/* 弹窗底部 */
.popup-footer
  text-align: center
  a
    display: inline-block
    margin-top: 10px
    padding: 10px 20px
    background: linear-gradient(90deg, #ff7eb3, #ff758c)
    border-radius: 30px
    color: #fff
    text-decoration: none
    font-weight: bold
    transition: background 0.3s ease, transform 0.3s ease
    &:hover
      background: linear-gradient(90deg, #ff758c, #ff7eb3)
      transform: translateY(-2px)


/* 弹出动画 */
@keyframes popup-appear
  0%
    transform: translate(-50%, -50%) scale(0.8)
    opacity: 0
  100%
    transform: translate(-50%, -50%) scale(1)
    opacity: 1
```
3.代码添加完成后，根据自己的喜好修改显示文件，修改文字、样式等等。之后便执行
```shell
hexo cl
hexo g
hexo s
```
如果显示正常即可执行
```shell
hexo d
```
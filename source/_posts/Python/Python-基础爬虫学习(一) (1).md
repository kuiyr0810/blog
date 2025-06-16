---
title: Python-基础爬虫学习(一)
author: Sunshine.
date: 2025-03-1 22:49:23
audio: true
math: false
categories:
    - [Python]
---
+++primary 什么是爬虫？
爬虫是一种自动化程序，它按照一定的规则来爬取互联网上的各种有用的信息，为自己所用。
爬取信息前务必遵守网站的robots协议，遵守网站服务条款，严禁爬取网站用户个人信息！！
# 爬虫的基本流程
·发送请求
·解析网页
·提取数据
·存储数据
+++
先来一些简单的小例子！
;;;id1 豆瓣排行榜
```Python
#导入两个必要的库 requests用来发送请求 BeautifulSoup用来解析网页内容  
  
import requests  
from bs4 import BeautifulSoup  
  
#确定要爬取的网页  
url = "http://movie.douban.com/top250"  
#设置请求头,模拟真实浏览器访问，否则可能会被阻止访问  
hearders = {  
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36"  
}  
#向网页发送http请求,获取网页内容  
reponse = requests.get(url, headers=hearders)  
#解析网页html内容,为下一步寻找网页标签做条件  
soup = BeautifulSoup(reponse.text, "html.parser")  
#找到电影标题所在的标签，获得所有的电影标题。此处需要会利用开发者工具,懂简单的html知识  
moive_titles = soup.find_all('span', class_='title')  
#打印电影标题并储存到douban.txt文件  
with open('douban.txt', 'w', encoding="utf-8") as e:  
    for title in moive_titles:  
        print(title.text)  
        e.write(title.text + '\n')
```
;;;

;;;id1 知乎热榜
```Python
#导入两个必要的库 requests用来发送请求 BeautifulSoup用来解析网页内容  
  
import requests  
from bs4 import BeautifulSoup  
  
#确定要爬取的网页  
url = "https://www.zhihu.com/billboard"  
#设置请求头,模拟真实浏览器访问，否则可能会被阻止访问  
hearders = {  
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36"  
}  
#向网页发送http请求,获取网页内容  
reponse = requests.get(url, headers=hearders)  
#解析网页html内容,为下一步寻找网页标签做条件  
soup = BeautifulSoup(reponse.text, "html.parser")  
#找到电影标题所在的标签，获得所有的电影标题。此处需要会利用开发者工具,懂简单的html知识  
moive_titles = soup.find_all('div', class_='HotList-itemTitle')  
#打印电影标题并储存到douban.txt文件  
with open('zhihu.txt', 'w', encoding="utf-8") as e:  
    for title in moive_titles:  
        print(title.text)  
        e.write(title.text + '\n')
```
;;;
;;;id1 微博热榜
```Python
#导入两个必要的库 requests用来发送请求 BeautifulSoup用来解析网页内容  
  
import requests  
from bs4 import BeautifulSoup  
  
#确定要爬取的网页  
url = "https://www.trendshub.today/medias/weibo"  
#设置请求头,模拟真实浏览器访问，否则可能会被阻止访问  
hearders = {  
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36"  
}  
#向网页发送http请求,获取网页内容  
reponse = requests.get(url, headers=hearders)  
print("网页状态码:", reponse.status_code)  
#解析网页html内容,为下一步寻找网页标签做条件  
soup = BeautifulSoup(reponse.text, "html.parser")  
#找到电影标题所在的标签，获得所有的电影标题。此处需要会利用开发者工具,懂简单的html知识  
moive_titles = soup.find_all('div', class_='flex')  
#打印电影标题并储存到douban.txt文件  
with open('weibo.txt', 'w', encoding="utf-8") as e:  
    for title in moive_titles:  
        print(title.text)  
        e.write(title.text + '\n')
```
;;;
在以上三个例子中，可以作为简单的爬取简单元素的模板，每一条代码都进行了详细的解释，唯一有疑问的应该是[moive_titles = soup.find_all()]{.label},这里面的参数是如何来的呢？
接下来就需要你使用浏览器开发者工具分析网页结构，引号里面的是某个网页元素结构的[标签]{.label .primary},而class_的值为网页元素的[属性]{.label .primary}（可能有小伙伴会有疑问，为什么使用class_而不是class，这是为了与python本身的类关键词class区分）
如何寻找呢？
首先我们来观察豆瓣排行榜网页结构，鼠标放在标题上方，右键选择“检查”或者“审查元素”，可快速定位位置
![image.png](https://img.5200810.xyz/file/1740839552612_image.png)
我们可以观察到排行榜的每一个标题元素的标签都是**span**，属性class都是**title**，所以获取网页标题的主代码就是[moive_titles = soup.find_all('span', class_ = 'title')]{.label}。
剩下的例子都是相同的道理，当然了，这只是最基础的，有时候我们会碰到更复杂的网页结构，后面我们会细讲。

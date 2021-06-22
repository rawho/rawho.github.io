---
layout: blogs
permalink: /blogs/how-to-access-localhost-anywhere
title: How to access localhost from anywhere
img_path: ../images/blogs/ngrok.png
description: Do you want to share your localhost to anywhere in the world. Ngrok comes with a solution for this!
meta_desc: Do you want to share your localhost to anywhere in the world. Ngrok comes with a solution for this!
tag1: ngrok
tag2: localhost
display: t
---

# How to install and set up ngrok

First visit their official website [ngrok.com](https://ngrok.com)

There select get started for free

THat will ask you to sign up. Just sign up

Then it will redirect you to the dashboard

Download the zip file according to your operating system

Then upzip it and there you can see a file ngrok inside the unzipped folder

Get the authtoken provided in the ngrok dashbord

```
./ngrok authtoken blahblahblah
```
To make it globally accessible move it to /usr/bi
```
sudo mv ngrok /usr/bin
```

Then open a localhost server not the port number

Then run 
```
ngrok http <port no>
```
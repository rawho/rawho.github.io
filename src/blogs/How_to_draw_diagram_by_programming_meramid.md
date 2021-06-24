---
layout: blogs
slug: how-to-draw-diagrams-by-coding-using-mermaid
title: How to draw diagrams in our markdown using mermaid
img_path: ../images/blogs/mermaid.png
description: Are you tired of drawing diagrams? THen you are in right place. Here i will show you how to draw diagrams in our markdown file using mermaid
meta_desc: Are you tired of drawing diagrams? THen you are in right place. Here i will show you how to draw diagrams in our markdown file using mermaid. Lets see how to draw diagrams in our markdown!!
tag1: markdown
tag2: mermaid
display: t
---

# Table of contents
- [Table of contents](#table-of-contents)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Render Mermaid diagram in Webpage](#render-mermaid-diagram-in-webpage)

# Prerequisites

1. VS Code
2. Install the following extensions in VS Code
   1. Markdown Preview Enhanced
   2. Markdown Preview Meramid Support
   3. Meramid Markdown Syntax Highlighting (optional)

# Getting Started

Create a file with markdown extension (abc.md)
Then copy this code and paste it there
````
```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;   
```
````

Open the file in VS Code and right click and select Markdown Preview Enhanced. Then you can see this diagram there

<div style="text-align: center;" class="mermaid">
    graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;   
</div>

If you get this then your installation is successfull 🥳🥳

<br><br>

# Render Mermaid diagram in Webpage


For this you have to use two script tags, they are :

```
<script src="https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js"></script>
```


```
<script>mermaid.initialize({theme: 'dark', startOnLoad:true});</script>
```

**For light theme you can replace that theme to light**

Then you can write the mermaid diagram code inside div with class mermaid

Example: 

```
<html>
  <body>
    <script src="https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js"></script>
    <script>mermaid.initialize({ theme: 'dark', startOnLoad:true});</script>

    Here is one mermaid diagram:
    <div class="mermaid">
     pie title Some Title
         "FRIENDS" : 5
         "FAMILY" : 2
    </div>
  </body>
</html>
```

This will produce this output:
<div class="mermaid">
      pie title Some Title
         "FRIENDS" : 5
         "FAMILY" : 2
</div>

You can see more examples of diagrams [here](https://mermaid-js.github.io/mermaid/diagrams-and-syntax-and-examples/examples.html)
---
layout: blogs
permalink: /blogs/host-jekyll/
title: How to Host Jekyll
img_path: ../images/blogs/jekyll.png
description: Jekyll is a simple, blog-aware, static site generator. Firebase provides free hosting.
tag1: jekyll
tag2: firebase
display: f
---


Jekyll is a simple, blog-aware, static site generator. You create your content as text files (Markdown), and organize them into folders. Jekyll automatically stitches the content and templates together, generating a website made entirely of static assets, suitable for uploading to any server.

Firebase is a mobile and web application development platform which is owned by Google. One of its feature is the ability to deliver web app assets with speed and security.



## Requirements

Needs NPM, you can find the documentation [here](https://www.npmjs.com/get-npm)


## Steps

1. **Install firebase-tools**
   
   ```
   sudo npm install -g firebase-tools
   ```

2. **Login to firebase**
   
   ```
   firebase login
   ```

   This will open Google login page in your browser, login with the account you want to create the firebase account / project in.

3. **Create a project in Firebase Console**
   - Once you are logged in, visit [console.firebase.](https://console.firebase.google.com/)
   - Click on "Add Project".
    ![firebase](../images/blogs/jekyll-host/1.png)

    - Give a name to your project.
    - Accept the terms and conditions.
    - Click "Create Project".
4.  **Intialize Firebase in your Jekyll folder**

    ```
    cd <your jekyll folder path>
    ```

    ```
    firebase init
    ```

5.  **Follow these steps**
   
    - Select Hosting by moving the arrow down and hitting "Space" and then "Enter".
  
  
    ![firebase](../images/blogs/jekyll-host/2.png)

    - Select the app you just created in Firebase Console
    
    ![firebase](../images/blogs/jekyll-host/3.png)
    
    - Setup the hosting options that work for you.

    ![firebase](../images/blogs/jekyll-host/4.png)

6. **Deploy**
   
   ```
   firebase deploy
   ```

---
layout: blogs
slug: deploying-django-application-to-aws
title: Deploy Django application to AWS
img_path: ../images/blogs/django-aws.jpeg
description: Are you worried of deploying a django application, In this blog you can see how to deploy django app to aws
meta_desc: How to deploy django to aws? Are you worried of deploying a django application, In this blog you can see how to deploy django app to aws
tag1: django
tag2: aws
display: t
---

[Download as pdf](/pdf/Django%20on%20AWS.pdf)


### Prerequisite: 
- A [django application](/blogs/creating-a-django-project-from-scratch) created and pushed to github
- [An aws account](https://console.aws.amazon.com/)


>Note: For this demo
>- Project name: aws_demo_project
>- main folder : django_aws_demo

## Create an aws instance

- create an instance of ubuntu 20.04 instance
- download and save the .pem file provided by them
- connect to instance through ssh

Installing mysql in the server
```bash
sudo apt-get update 
sudo apt-get upgrade

sudo apt install mysql-server
sudo mysql_secure_installation

sudo mysql
CREATE USER 'rahul'@'localhost' IDENTIFIED BY '123456';
GRANT ALL PRIVILEGES ON * . * TO 'rahul'@'localhost';

```

Lets install python virtual env
```bash
sudo apt-get install python3-venv
```


clone the repository of django project you created, here for demo 
```bash
git clone https://github.com/rawho/django_aws_demo.git
```

Create a virtual env and activate it:
```bash
python3 -m venv env
source env/bin/activate

```

Install all the requirements
```bash
pip install -r requirements.txt
```

> If this shows any error 
> 
> ```bash
> sudo apt-get install python-dev python3-dev
> sudo apt-get install libmysqlclient-dev  
> pip install -r requirements.txt
> ```

Then create a database :
```bash
mysql -u rahul -p

# Lets create a database
CREATE DATABASE aws_demo_db;

```

mysql username, password, db name should match with the code that we cloned

then lets migrate the database
```bash
python manage.py makemigrations
python manage.py migrate
```

## Setting up the server

```bash
pip install gunicorn
sudo apt-get install nginx
```

Then allow the http, https, 8000 traffic in the inbound rule

```bash
gunicorn --bind 0.0.0.0:8000 aws_demo_project.wsgi:application
```

When the terminal is closed the application also stops working

There the supervisor comes into play

```bash
sudo apt-get install supervisor
```

### Lets configure the Supervisor
```bash
cd /etc/supervisor/conf.d/
sudo touch gunicorn.conf
```

copy this in `gunicorn.conf` file:
```
[program:gunicorn]
directory=/home/ubuntu/django_aws_demo
command=/home/ubuntu/env/bin/gunicorn --workers 3 --bind unix:/home/ubuntu/django_aws_demo/app.sock aws_demo_project.wsgi:application

autostart=true
autorestart=true
stderr_logfile=/var/log/gunicorn/gunicorn.err.log
stdout_logfile=/var/log/gunicorn/gunicorn.out.log

[group:guni]
programs:gunicorn

```

```
sudo mkdir /var/log/gunicorn
sudo supervisorctl reread
sudo supervisorctl update
sudo supervisorctl status
```

### Lets configure the nginx

```bash
cd /etc/nginx/sites-available/
sudo touch django.conf
```

copy this in `django.conf`

```nginx
server {
        client_max_body_size 4G;
        server_name ec2-3-89-131-161.compute-1.amazonaws.com githubstats.xyz www.githubstats.xyz 3.89.131.161;

        location / {
                include proxy_params;
                proxy_pass http://unix:/home/ubuntu/django_aws_demo/app.sock;
        }
        location / {
                autoindex on;
                alias /home/ubuntu/django_aws_demo/;
        }
        location /media/ {
                autoindex on;
                alias /home/ubuntu/django_aws_demo/media/;
        }

}
```

```
sudo nginx -t
sudo ln django.conf /etc/nginx/sites-enabled/
```

```
sudo service nginx reload
sudo service supervisor reload
```

if you go to the ip adress you can see the application


- [deploy django app to Heroku](/blogs/deploying-django-application-to-heroku)
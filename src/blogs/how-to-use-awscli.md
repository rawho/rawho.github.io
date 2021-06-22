---
layout: blogs
permalink: /blogs/how-to-install-and-use-aws-cli
title: How to Install and Use AWS CLI
img_path: ../images/blogs/aws-cli.jpg
meta_desc: The AWS Command Line Interface (CLI) is a unified tool to manage your AWS services. With just one tool to download and configure, you can control multiple AWS services from the command line and automate them through scripts.
description: The AWS Command Line Interface (CLI) is a unified tool to manage your AWS services. With just one tool to download and configure.
tag1: AWS
tag2: cli
display: f
---

# Installation

```
sudo apt install awscli
```

# Setup
```
aws configure
```

This will ask you to provide:
- Your AWS Access Key ID
- AWS Secret Access Key
- Default region name (top right of aaws console)
- Default output format (json)

# Example

```
aws s3 ls
```
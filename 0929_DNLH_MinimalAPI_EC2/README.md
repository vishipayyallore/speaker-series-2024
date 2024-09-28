# AWS - Deploy .NET 8 Minimal API on Ubuntu EC2 Nginx

## Date Time: 29-Sep-2024 at 09:00 AM IST

## Event URL: [https://www.meetup.com/dot-net-learners-house-hyderabad/events/301436462](https://www.meetup.com/dot-net-learners-house-hyderabad/events/301436462)

## YouTube URL: [https://www.youtube.com/watch?v=DiTCaNKe-9k](https://www.youtube.com/watch?v=DiTCaNKe-9k)

<!-- ![Viswanatha Swamy P K |150x150](./Documentation/Images/ViswanathaSwamyPK.PNG) -->

---

### Software/Tools

> 1. OS: Windows 10/11 x64
> 1. Python / .NET 8
> 1. Visual Studio 2022
> 1. Visual Studio Code

### Prior Knowledge

> 1. Programming knowledge in C#
> 1. Microservices / Distributed applications
> 1. AWS, CI/CD

## Technology Stack

> 1. .NET 8, C#, AWS, EC2, Nginx

## Information

![Information | 100x100](../Documentation/Images/Information.PNG)

## What are we doing today?

> 1. The Big Picture
> 1. SUMMARY / RECAP / Q&A

### Please refer to the [**Source Code**](https://github.com/ViswanathaSwamy-PK-TechSkillz-Academy/minimal-apis/tree/main/School) of today's session for more details

---

![Information | 100x100](../Documentation/Images/SeatBelt.PNG)

---

## 1. The Big Picture

> 1. Discussion

## Verifying the .NET 8 Web API on the local box

> 1. Discussion & Demo

![Verifying AP Locally](Documentation/Images/Verifying_API_Locally_1.PNG)

## Create a New EC2

> 1. Discussion
> 1. Ubuntu 22.04

![Ubuntu VM 22.04](Documentation/Images/EC2_2.PNG)

## Current Inbound Ports enables

> 1. Discussion
> 1. Port 22, 80 are enabled

![Ports Enabled](Documentation/Images/Enabled_Ports_3.PNG)

## Installing Nginx on Ubuntu EC2

> 1. Discussion & Demo

```bash
sudo apt-get -y update
sudo apt-get -y install nginx
curl -I http://localhost
```

![Install Nginx](Documentation/Images/Install_Nginx_4.PNG)

## Installing .NET 8 on Ubuntu EC2

> 1. Discussion & Demo

### Reference(s)

> 1. <https://learn.microsoft.com/en-gb/dotnet/core/install/linux-ubuntu#2004->
> 1. <https://learn.microsoft.com/en-gb/dotnet/core/install/linux-ubuntu-install?pivots=os-linux-ubuntu-2204&tabs=dotnet8>

```bash
sudo apt-get update && \
  sudo apt-get install -y dotnet-sdk-8.0
```

![Installing .NET 8](Documentation/Images/Installing_.NET_8_5.PNG)

## Publish the binaries into local folder

> 1. Discussion & Demo

## Push the binaries into the Ubuntu EC2

> 1. Discussion & Demo

## SUMMARY / RECAP / Q&A

> 1. SUMMARY / RECAP / Q&A

---

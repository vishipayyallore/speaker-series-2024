# AI 102 - Analyze images, Image classification with Azure AI Vision

## Date Time: 12-Aug-2024 at 09:00 AM IST

## Event URL: [https://www.meetup.com/dot-net-learners-house-hyderabad/events/300367723](https://www.meetup.com/dot-net-learners-house-hyderabad/events/300367723)

## YouTube URL: [https://www.youtube.com/watch?v=TiM9O5nPiHU](https://www.youtube.com/watch?v=TiM9O5nPiHU)

## MS Learn Module(s)

> 1. <https://aka.ms/Analyze-video>
> 1. <https://aka.ms/Azure-AI-Vision-Service>

<!-- ![Viswanatha Swamy P K |150x150](./Documentation/Images/ViswanathaSwamyPK.PNG) -->

---

### Software/Tools

> 1. OS: Windows 10/11 x64
> 1. Python / .NET 8
> 1. Visual Studio 2022
> 1. Visual Studio Code

### Prior Knowledge

> 1. Programming knowledge in C# / Python
> 1. Microservices / Distributed applications
> 1. Azure / Azure Open AI

## Technology Stack

> 1. .NET 8, Python, Azure

## Information

![Information | 100x100](../Documentation/Images/Information.PNG)

## What are we doing today?

> 1. The Big Picture
>    - Pre-requisites
>    - Previous Session
>    - Current Architecture
> 1. Provision an Azure AI Services resource
>    - Retrieve the Endpoint and key
> 1. Image Analysis Query from previous session
> 1. Read Text in images and documents with the Azure AI Vision Service
>    - Working with Vision Studio
>    - Working with Read REST API in Postman
>    - Working with Azure AI Vision SDK
>    - Working with Azure AI Vision Read Container
> 1. SUMMARY / RECAP / Q&A

### Please refer to the [**Source Code**](https://github.com/vishipayyallore/aiml-2024/tree/main/ai102demos) of today's session for more details

---

![Information | 100x100](../Documentation/Images/SeatBelt.PNG)

---

## 1. The Big Picture

> 1. <https://go.microsoft.com/fwlink/?linkid=2226361&clcid=0x4009>

### Pre-requisites

> 1. Azure Open AI, AI/ML
> 1. Python, C#, and .NET 8

### Previous Session

> 1. `Entire playlist` <https://www.youtube.com/watch?v=LSbvf_Qtwb4&list=PLdLQDTLMjAzrb3Lbg2GrGErISdmg8n7YC&pp=iAQB>

### Current Architecture

> 1. NA

## 2. Provision an Azure AI Services resource

> 1. Discussion and Demo
> 1. Azure AI services multi-service account
> 1. Resource Group name `rg-ai102-dev-001`
> 1. Azure AI Services name `azaisvc-ai102-dev-001`

### 2.1. Retrieve the `Endpoint` and `key`

> 1. Discussion and Demo
> 1. Please place these inside your `secrets.json` which is outside your source code location, OR `appsettings.json` which is placed inside `.gitignore`
> 1. Please create an `appsettings.example.json` for reference.
> 1. Please place these inside your `.env` file.
> 1. Please create an `example.env` for reference.
> 1. Environment Variables is also another option.

## 3. Image Analysis Query from previous session

> 1. Discussion and Demo

## ![Man Door Image Analysis](./Documentation/Images/Man_Door_Image_Analysis.PNG)

## 4. Read Text in images and documents with the Azure AI Vision Service

> 1. Discussion and Demo
> 1. <https://learn.microsoft.com/en-us/azure/ai-services/computer-vision/overview-ocr>

## 4.1. Working with Vision Studio

> 1. Discussion and Demo

![AI Vision Studio OCR](./Documentation/Images/AIVisionStudio.PNG)

## 4.2. Working with Read REST API in Postman

> 1. Discussion and Demo

### 4.2.1. POST Request

![AI Vision Service REST API](./Documentation/Images/AIVisionService_OCR_Post.PNG)

### 4.2.2. Get Results

![AI Vision Service REST API](./Documentation/Images/AIVisionService_OCR_Get.PNG)

## 4.3. Working with Azure AI Vision SDK

> 1. Discussion and Demo

![Azure AI Vision SDK](./Documentation/Images/AzureAIVisionSDK.PNG)

## 4.4. Working with Azure AI Vision Read Container

> 1. Discussion and Demo

### 4.4.1. Pull the Docker Image

```powershell
docker pull mcr.microsoft.com/azure-cognitive-services/vision/read:3.2-model-2022-04-30
```

![Azure AI Vision Read Container](./Documentation/Images/PullOCRReadContainer.PNG)

### 4.4.2. Execute the Docker container

```powershell
docker run --rm -d -p 5005:5000 --memory 16g --cpus 8 mcr.microsoft.com/azure-cognitive-services/vision/read:3.2-model-2022-04-30 Eula=accept Billing="https://azais-ai102-dev-001.cognitiveservices.azure.com/" ApiKey=$apiKey
```

![Azure AI Vision Read Container](./Documentation/Images/ExecuteOCRReadContainer.PNG)

### 4.4.3. Use the local Read Container

![Azure AI Vision Read Container](./Documentation/Images/UsingLocalReadContainer.PNG)

---

## X. SUMMARY / RECAP / Q&A

> 1. SUMMARY / RECAP / Q&A
> 2. Any open queries, I will get back through meetup chat/twitter.

---

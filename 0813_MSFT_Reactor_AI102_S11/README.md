# AI 102 - Kickstart Your Journey with Azure OpenAI Service

## Date Time: 13-Aug-2024 at 05:00 PM IST

## Event URL: [https://www.meetup.com/microsoft-reactor-bengaluru/events/302151637](https://www.meetup.com/microsoft-reactor-bengaluru/events/302151637)

## YouTube URL: [https://www.youtube.com/watch?v=10QTfHsVxwk](https://www.youtube.com/watch?v=10QTfHsVxwk)

## MS Learn Module(s)

> 1. <https://aka.ms/AzureOpen-AI>

![Viswanatha Swamy P K |150x150](./Documentation/Images/ViswanathaSwamyPK.PNG)

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
>    - Retrieve the `Endpoint` and `key` from Portal
>    - Retrieve/Modify the `key` using PowerShell
> 1. What is Intelligence?
> 1. A few Terms AI, ML, Auto ML, DL, NLP, GAI
>    - Artificial Intelligence (AI)
>    - Machine Learning (ML)
>    - Deep Learning (DL)
>    - Natural Language Processing (NLP)
>    - Generative AI
> 1. ELIZA - The early Natural Language Processing (NLP) Chatbot
> 1. Azure Open AI, Transformer, and GPT
>    - Azure Open AI
>    - Transformer
>    - GPT - Generative Pre-trained Transformer
> 1. 30,000 foot view of Azure OpenAI
>    - What is Azure OpenAI Service?
>    - Azure OpenAI Service quotas and limits
>    - Azure OpenAI Service models
> 1. Access Azure OpenAI Service
>    - Creating Azure Open AI using Azure Portal
>    - Creating Azure Open AI using az CLI
> 1. 30,000 foot view of Azure AI Studio
>    - What is Azure AI Studio?
>    - Trying couple of Built-in Completion Examples in Azure AI Studio
> 1. Tokens Tokens Tokens and more Tokens
> 1. Trying our own Completion Examples in Azure AI Studio
> 1. Trying our own Completion Examples using Postman
> 1. Trying our own Completion Examples using `C#`
> 1. SUMMARY / RECAP / Q&A

### Please refer to the [**Source Code**](https://github.com/vishipayyallore/aiml-2024/tree/main/ai102demos) of today's session for more details

---

![Information | 100x100](../Documentation/Images/SeatBelt.PNG)

---

## 1. The Big Picture

> 1. Kickstart Your Journey with Azure OpenAI Service

### 1.1. Pre-requisites

> 1. Azure Open AI, AI/ML
> 1. Python, C#, and .NET 8

### 1.2. Previous Session

> 1. `Entire playlist` <https://www.youtube.com/playlist?list=PLmsFUfdnGr3wmIh-glyiMkhHS6byEuI59>

### 1.3. Current Architecture

> 1. NA

## 2. Provision an Azure AI Services resource

> 1. Discussion and Demo
> 1. Azure AI services multi-service account
> 1. Resource Group name `rg-ai102-dev-001`
> 1. Azure AI Services name `azaisvc-ai102-dev-001`

### 2.1. Retrieve the `Endpoint` and `key` from Portal

> 1. Discussion and Demo
> 1. Please place these inside your `secrets.json` which is outside your source code location, OR `appsettings.json` which is placed inside `.gitignore`
> 1. Please create an `appsettings.example.json` for reference.
> 1. Please place these inside your `.env` file.
> 1. Please create an `example.env` for reference.
> 1. Environment Variables is also another option.

### 2.2. Retrieve/Modify the `key` using PowerShell

> 1. Discussion and Demo

```powershell
$rgname="rg-ai102-dev-001"
$aaisvs="aisvc-central-india-001"

az cognitiveservices account keys list --name $aaisvs --resource-group $rgname

az cognitiveservices account keys regenerate --name $aaisvs --resource-group $rgname --key-name key1
```

## 3. What is Intelligence?

> 1. Discussion

## 4. A few Terms AI, ML, Auto ML, DL, NLP, GAI

### 4.1. Artificial Intelligence (AI)

> - AI refers to the broader field of computer science focused on creating machines and software that can perform tasks that typically require human intelligence.
> - It encompasses various techniques and approaches, including machine learning and deep learning, to enable systems to reason, learn, perceive, and solve complex problems.
> - Strong / General AI: Capable of performing a wide range of tasks.
> - Narrow / Weak AI: Designed to perform specific tasks.

### 4.2. Machine Learning (ML)

> - ML is a subset of AI that involves the development of algorithms and models that allow computers to learn from data and make predictions or decisions without being explicitly programmed.
> - ML includes supervised, unsupervised, and reinforcement learning, among others, and finds applications in areas like image recognition and recommendation systems.
> - Steps: Data Collection | Data Preparation | Model Selection | Train Model | Evaluate Model | Parameter Tuning | Prediction | (GAI => New Content)

### 4.3. Deep Learning (DL)

> - DL is a subfield of ML that focuses on neural networks with many layers (deep neural networks). It handles complex, high-dimensional data, such as images and text.
> - DL has led to breakthroughs in areas like computer vision, natural language processing, and speech recognition, and it relies on large datasets and powerful hardware like GPUs.

### 4.4. Natural Language Processing (NLP)

> - NLP is a branch of AI that deals with the interaction between computers and human language. It enables machines to understand, interpret, and generate human language.
> - NLP is used in chatbots, sentiment analysis, machine translation, and more, and it involves tasks like tokenization, part-of-speech tagging, and language generation.

### 4.5. Generative AI

> - Generative AI refers to AI systems capable of generating new, original content, such as text, images, or music, often with some creativity.
> - It includes techniques like Generative Adversarial Networks (GANs) and variational autoencoders (VAEs), which have applications in art generation, content creation, and data augmentation.
> - **Generative Adversarial Networks (GANs)**
>   - GANs are a class of deep learning models consisting of two neural networks, a generator, and a discriminator, which are trained simultaneously through a competitive process.
>   - The generator aims to create data (e.g., images) that is indistinguishable from real data, while the discriminator tries to distinguish between real and generated data. This adversarial training process results in the generation of high-quality, realistic data and has applications in image generation, style transfer, and more.
> - **Variational Autoencoders (VAEs)**
>   - VAEs are another type of generative model used in unsupervised learning. They consist of an encoder network that maps input data into a latent space and a decoder network that reconstructs data from the latent space.
>   - VAEs are used for generating new data samples and learning meaningful representations of data. They are particularly useful in applications like image generation, anomaly detection, and data compression due to their ability to generate diverse and structured data from a continuous latent space.

## 5. ELIZA - The early Natural Language Processing (NLP) Chatbot

### ELIZA

> - ELIZA is one of the earliest and most well-known examples of a natural language processing (NLP) chatbot. Developed in the mid-1960s by Joseph Weizenbaum at the Massachusetts Institute of Technology (MIT), ELIZA was designed to simulate a Rogerian psychotherapist. Its primary purpose was to engage users in conversation and provide responses based on simple pattern recognition.
> - It was one of the first chatbots to use natural language processing techniques to simulate human conversation.
> - ELIZA demonstrated that even with relatively simple pattern-matching techniques, a computer program could engage users in meaningful conversations. While it was limited in its capabilities compared to modern chatbots, it was a pioneering step in the field of NLP and human-computer interaction.

#### Reference(s)

> 1. [https://en.wikipedia.org/wiki/ELIZA](https://en.wikipedia.org/wiki/ELIZA)

## 6. Azure Open AI, Transformer, and GPT

### 6.1. Azure Open AI

> - Azure OpenAI is a cloud-based service provided by Microsoft Azure that offers access to the power of OpenAI's language models, such as GPT-3, GPT-4, and others. It enables developers to integrate natural language understanding and text generation capabilities into their applications and services. Azure OpenAI is designed for a wide range of use cases, including chatbots, content generation, language translation, and more, and it offers scalable and efficient access to advanced AI language capabilities via a RESTful API. It provides developers with the tools they need to build intelligent, language-driven applications.

### 6.2. Transformer

> - A "Transformer" in the context of artificial intelligence and machine learning is not a physical device but a type of deep learning model architecture that has had a significant impact on various natural language processing (NLP) tasks and other machine learning domains.
> - These topics are interconnected, with AI being the overarching field that encompasses various subfields like ML, DL, NLP, and Generative AI. Each of these subfields has its own set of techniques and applications, contributing to the advancement of artificial intelligence.

### 6.3. GPT - Generative Pre-trained Transformer

> - The term "GPT" stands for "Generative Pre-trained Transformer." It refers to a class of deep learning models used for various natural language processing (NLP) tasks. These models are characterized by their ability to generate human-like text and their architecture, which is based on the Transformer neural network.
>   - **Generative**: GPT models are capable of generating human-readable text. They can be used for tasks like text completion, text summarization, and even creative writing.
>   - **Pre-trained**: GPT models are initially trained on a large corpus of text data from the internet. This pre-training phase allows them to learn grammar, context, and world knowledge from a wide range of sources.
>   - **Transformer**: The underlying architecture of GPT models is the Transformer, which is a neural network architecture introduced in the paper "Attention Is All You Need" by Vaswani et al. in 2017. The Transformer architecture relies on the self-attention mechanism, which allows the model to consider the context and relationships between words in a sequence efficiently.
> - GPT models, such as GPT-3, GPT-4, and others, have achieved remarkable performance in various NLP tasks and have been widely adopted in the field of artificial intelligence. They have applications in natural language understanding, text generation, language translation, chatbots, and more.

## 7. 30,000 foot view of Azure OpenAI

> 1. Discussion and Demo

### 7.1. What is Azure OpenAI Service?

> 1. Discussion and Demo
> 1. [https://learn.microsoft.com/en-us/azure/cognitive-services/openai/overview](https://learn.microsoft.com/en-us/azure/cognitive-services/openai/overview)

### 7.2. Azure OpenAI Service quotas and limits

> 1. Discussion and Demo
> 1. [https://learn.microsoft.com/en-us/azure/cognitive-services/openai/quotas-limits](https://learn.microsoft.com/en-us/azure/cognitive-services/openai/quotas-limits)

### 7.3. Azure OpenAI Service models

> 1. Discussion and Demo
> 1. [https://learn.microsoft.com/en-us/azure/cognitive-services/openai/concepts/models](https://learn.microsoft.com/en-us/azure/cognitive-services/openai/concepts/models)

## 8. Access Azure OpenAI Service

> 1. Discussion and Demo

### 8.1. Creating Azure Open AI using Azure Portal

> 1. Discussion and Demo

![Azure Open AI using Portal | 100x100](./Documentation/Images/AOAI_Using_Portal.PNG)

### 8.2. Creating Azure Open AI using az CLI

> 1. Discussion and Demo
> 1. <https://learn.microsoft.com/en-us/azure/cognitive-services/openai/concepts/models#model-summary-table-and-region-availability/?azure-portal=true>

```powershell
$aoaiName = "azoai-ai102-dev-" + (Get-Random)
$resourceGroup = "rg-ai102-dev-001"
$subscriptionID = "YourSubscriptionId"

az account show

az account list-locations --output table

az cognitiveservices account list --subscription $subscriptionID --output table

az cognitiveservices account create -n $aoaiName -g $resourceGroup -l eastus --kind OpenAI --sku s0 --subscription $subscriptionID
```

![Azure Open AI using AZ CLI | 100x100](./Documentation/Images/AOAI_Using_AzCLI.PNG)

## 9. 30,000 foot view of Azure AI Studio

> 1. Discussion and Demo

### 9.1. What is Azure AI Studio?

> 1. Discussion and Demo
> 1. [https://learn.microsoft.com/en-us/azure/cognitive-services/openai/quickstart?pivots=programming-language-studio&tabs=command-line](https://learn.microsoft.com/en-us/azure/cognitive-services/openai/quickstart?pivots=programming-language-studio&tabs=command-line)

### 9.2. Explore types of generative AI models

> 1. Discussion and Demo

```powershell
az cognitiveservices account deployment create -g $resourceGroup -n $aoaiName --deployment-name gpt-4o-mini-dname --model-name gpt-4o-mini  --model-version "2024-07-18" --model-format OpenAI --sku-name "Standard" --sku-capacity 1
```

### 9.3. Deploy generative AI models

> 1. Discussion and Demo

![Model Deployment | 100x100](./Documentation/Images/AOAI_Model_Deployment.PNG)

### 9.4. Trying couple of Built-in Completion Examples in Azure AI Studio

> 1. Discussion and Demo

![Azure AI Studio Sample | 100x100](./Documentation/Images/AOAI_Studio_Sample.PNG)

## 10. Tokens Tokens Tokens and more Tokens

> 1. Discussion and Demo

**References:**

> 1. [https://platform.openai.com/tokenizer](https://platform.openai.com/tokenizer)

![Tokenizer | 100x100](./Documentation/Images/Tokenizer.PNG)

## 11. Trying our own Completion Examples in Azure AI Studio

> 1. Discussion and Demo

```text
Input: Please write a Happy Birthday wishes for my Mother

Input: Give the top 5 food items from South India

Input: Give the top 5 Populated states in India

Inputs:
1. Which is the tallest building in the world
2. Which is the tallest building in Hyderabad

Input: Tell me two jokes about simple people
```

## 12. Trying our own Completion Examples using Postman

> 1. Discussion and Demo

![Completions with Postman | 100x100](./Documentation/Images/AOAI_Completions_Postman.PNG)

## 13. Trying our own Completion Examples using `C#`

> 1. Discussion and Demo

![Completions with CS | 100x100](./Documentation/Images/AOAI_Completions_CS.PNG)

## X. SUMMARY / RECAP / Q&A

> 1. SUMMARY / RECAP / Q&A
> 2. Any open queries, I will get back through meetup chat/twitter.

---

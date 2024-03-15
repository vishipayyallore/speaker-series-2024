# AI 102 - Prepare, Create, and Consume Azure AI services

## Date Time: 18-Mar-2024 at 09:00 AM IST

## Event URL: [https://www.meetup.com/dot-net-learners-house-hyderabad/events/299614919](https://www.meetup.com/dot-net-learners-house-hyderabad/events/299614919)

## YouTube URL: [https://www.youtube.com/watch?v=ToBeDone](https://www.youtube.com/watch?v=ToBeDone)

## MS Learn Module(s)

> 1. <https://learn.microsoft.com/en-us/training/modules/prepare-to-develop-ai-solutions-azure/>
> 1. <https://learn.microsoft.com/en-us/training/modules/create-manage-ai-services/>

![Viswanatha Swamy P K |150x150](./Documentation/Images/ViswanathaSwamyPK.PNG)

---

### Software/Tools

> 1. OS: Windows 10/11 x64
> 1. Python / .NET 8
> 1. Visual Studio 2022
> 1. Visual Studio Code

### Prior Knowledge

> 1. Programming knowledge in C# / Python
> 1. Azure / Azure Open AI / AM/ML

## Technology Stack

> 1. .NET 8, Python, Azure

## Information

![Information | 100x100](../Documentation/Images/Information.PNG)

## What are we doing today?

> 1. The Big Picture
>    - Pre-requisites
>    - Previous Session
>    - Current Architecture
> 1. Study guide for Exam AI-102
> 1. What is Intelligence?
> 1. Few Terms AI, ML, Auto ML, DL, NLP, GAI
> 1. ELIZA - The early Natural Language Processing (NLP) Chatbot
> 1. Azure Open AI, Transformer and GPT
> 1. Prepare to develop AI solutions on Azure
> 1. Create and consume Azure AI services
> 1. SUMMARY / RECAP / Q&A

### Please refer to the [**Source Code**](https://github.com/vishipayyallore/aiml-2024/tree/main/ai102demos/TextAnalyticsDemos) of today's session for more details

---

![Information | 100x100](../Documentation/Images/SeatBelt.PNG)

---

## 1. The Big Picture

### Pre-requisites

> 1. Azure Open AI, AI/ML
> 1. Python, C#, and .NET 8

### Previous Session

> 1. NA

### Current Architecture

> 1. NA

## 2. Study guide for Exam AI-102

> 1. Discussion and Demo.
> 1. <https://learn.microsoft.com/en-gb/credentials/certifications/resources/study-guides/ai-102>

![AI-102 Study Guide | 100x100](./Documentation/Images/AI102_StudyGuide.PNG)

## 3. What is Intelligence?

> 1. Discussion

## 4. Few Terms AI, ML, Auto ML, DL, NLP, GAI

> **Artificial Intelligence (AI):**
>
> - AI refers to the broader field of computer science focused on creating machines and software that can perform tasks that typically require human intelligence.
> - It encompasses various techniques and approaches, including machine learning and deep learning, to enable systems to reason, learn, perceive, and solve complex problems.
> - Strong / General AI => Do lots of things
> - Narrow / Weak AI => Perform specific things

---

> **Machine Learning (ML):**
>
> - ML is a subset of AI that involves the development of algorithms and models that allow computers to learn from data and make predictions or decisions without being explicitly programmed.
> - ML includes supervised learning, unsupervised learning, and reinforcement learning, among others, and finds applications in areas like image recognition and recommendation systems.
> - Data Collection | Data Preparation | Model Selection | Train Model | Evaluate Model | Parameter tuning | Prediction | (GAI => New Content)

---

> **What is a Model in AI/ML?**
>
> - In the context of AI/ML (Artificial Intelligence/Machine Learning), a "model" refers to a mathematical representation or framework that is trained on data to make predictions or decisions without being explicitly programmed. It is a key component in the machine learning process and serves as the learned knowledge from the training data.
> - In summary, a model in AI/ML is a mathematical representation of learned patterns or relationships in data. It serves as the foundation for making predictions or decisions in various applications, ranging from image recognition and natural language processing to recommendation systems and autonomous vehicles.

---

> **Deep Learning (DL):**
>
> - DL is a subfield of ML that focuses on neural networks with many layers (deep neural networks). It excels in handling complex, high-dimensional data, such as images and text.
> - DL has led to breakthroughs in areas like computer vision, natural language processing, and speech recognition, and it relies on large datasets and powerful hardware like GPUs.

---

> **Natural Language Processing (NLP):**
>
> - NLP is a branch of AI that deals with the interaction between computers and human language. It enables machines to understand, interpret, and generate human language.
> - NLP is used in chatbots, sentiment analysis, machine translation, and more, and it involves tasks like tokenization, part-of-speech tagging, and language generation.

---

> **Generative AI:**
>
> - Generative AI refers to AI systems capable of generating new, original content, such as text, images, or music, often with some level of creativity.
> - It includes techniques like Generative Adversarial Networks (GANs) and variational autoencoders (VAEs), which have applications in art generation, content creation, and data augmentation.
> - 1. **Generative Adversarial Networks (GANs):**
>   - GANs are a class of deep learning models consisting of two neural networks, a generator, and a discriminator, which are trained simultaneously through a competitive process.
>   - The generator aims to create data (e.g., images) that is indistinguishable from real data, while the discriminator tries to distinguish between real and generated data. This adversarial training process results in the generation of high-quality, realistic data and has applications in image generation, style transfer, and more.
> - 1. **Variational Autoencoders (VAEs):**
>   - VAEs are another type of generative model used in unsupervised learning. They consist of an encoder network that maps input data into a latent space and a decoder network that reconstructs data from the latent space.
>   - VAEs are used for generating new data samples and learning meaningful representations of data. They are particularly useful in applications like image generation, anomaly detection, and data compression due to their ability to generate diverse and structured data from a continuous latent space.

## 5. ELIZA - The early Natural Language Processing (NLP) Chatbot

> **ELIZA:**
>
> - ELIZA is one of the earliest and most well-known examples of a natural language processing (NLP) chatbot. Developed in the mid-1960s by Joseph Weizenbaum at the Massachusetts Institute of Technology (MIT), ELIZA was designed to simulate a Rogerian psychotherapist. Its primary purpose was to engage users in conversation and provide responses based on simple pattern recognition.
> - It was one of the first chatbots to use natural language processing techniques to simulate human conversation.
> - ELIZA demonstrated that even with relatively simple pattern-matching techniques, a computer program could engage users in meaningful conversations. While it was limited in its capabilities compared to modern chatbots, it was a pioneering step in the field of NLP and human-computer interaction.

Reference(s):

> 1. [https://en.wikipedia.org/wiki/ELIZA](https://en.wikipedia.org/wiki/ELIZA)

## 6. Azure Open AI, Transformer and GPT

> **Azure Open AI:**
>
> - Azure OpenAI is a cloud-based service provided by Microsoft Azure that offers access to the power of OpenAI's language models, such as GPT-3, GPT-4, and others. It enables developers to integrate natural language understanding and text generation capabilities into their applications and services. Azure OpenAI is designed for a wide range of use cases, including chatbots, content generation, language translation, and more, and it offers scalable and efficient access to advanced AI language capabilities via a RESTful API. It provides developers with the tools they need to build intelligent, language-driven applications.

---

> **Transformer:**
>
> - A "Transformer" in the context of artificial intelligence and machine learning is not a physical device but a type of deep learning model architecture that has had a significant impact on various natural language processing (NLP) tasks and other machine learning domains.
> - These topics are interconnected, with AI being the overarching field that encompasses various subfields like ML, DL, NLP, and Generative AI. Each of these subfields has its own set of techniques and applications, contributing to the advancement of artificial intelligence.

---

> **GPT - Generative Pre-trained Transformer:**
>
> - The term "GPT" stands for "Generative Pre-trained Transformer." It refers to a class of deep learning models used for various natural language processing (NLP) tasks. These models are characterized by their ability to generate human-like text and their architecture, which is based on the Transformer neural network.
>   - **Generative**: GPT models are capable of generating human-readable text. They can be used for tasks like text completion, text summarization, and even creative writing.
>   - **Pre-trained**: GPT models are initially trained on a large corpus of text data from the internet. This pre-training phase allows them to learn grammar, context, and world knowledge from a wide range of sources.
>   - **Transformer**: The underlying architecture of GPT models is the Transformer, which is a neural network architecture introduced in the paper "Attention Is All You Need" by Vaswani et al. in 2017. The Transformer architecture relies on the self-attention mechanism, which allows the model to consider the context and relationships between words in a sequence efficiently.
> - GPT models, such as GPT-3, GPT-4, and others, have achieved remarkable performance in various NLP tasks and have been widely adopted in the field of artificial intelligence. They have applications in natural language understanding, text generation, language translation, chatbots, and more.

## 7. Prepare to develop AI solutions on Azure

> 1. Discussion and Demo
> 1. <https://learn.microsoft.com/en-us/training/modules/prepare-to-develop-ai-solutions-azure/>

## 8. Create and consume Azure AI services

> 1. Discussion and Demo
> 1. <https://learn.microsoft.com/en-us/training/modules/create-manage-ai-services/>
> 1. <https://microsoftlearning.github.io/mslearn-ai-services/Instructions/Exercises/01-use-azure-ai-services.html>

![Text Analysis | 100x100](./Documentation/Images/AAIServices_TextAnalysis.PNG)

### Virtual Environment Creation

```powershell
pip install virtualenv
python -m venv .venv
.venv/Scripts/activate
pip freeze
deactivate
```

```powershell
pip install python-dotenv
pip install azure-ai-textanalytics==5.3.0
```

![Text Analysis | 100x100](./Documentation/Images/AAIServices_TextAnalysis_1.PNG)

![Text Analysis | 100x100](./Documentation/Images/AAIServices_TextAnalysis_2.PNG)

---

## 9. SUMMARY / RECAP / Q&A

> 1. SUMMARY / RECAP / Q&A
> 2. Any open queries, I will get back through meetup chat/twitter.

---

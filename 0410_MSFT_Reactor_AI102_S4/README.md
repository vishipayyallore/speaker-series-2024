# AI 102 - Secure and Monitor Azure AI Services - Part II

## Date Time: 10-Apr-2024 at 05:00 PM IST

## Event URL: [https://www.meetup.com/microsoft-reactor-bengaluru/events/299209829](https://www.meetup.com/microsoft-reactor-bengaluru/events/299209829)

## YouTube URL: [https://www.youtube.com/watch?v=XJS_9O4WePs](https://www.youtube.com/watch?v=XJS_9O4WePs)

## MS Learn Module(s)

> 1. <https://aka.ms/MonitorAzureAIservices>
> 1. <https://aka.ms/SecureAzureAIservices>

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
> 1. Get Started with Azure AI Services
> 1. Manage Azure AI Services Security
> 1. Monitor Azure AI Services
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

> 1. <https://www.youtube.com/watch?v=03dh8I5FZpo>

### Current Architecture

> 1. NA

## 2. Get Started with Azure AI Services

> 1. Discussion and Demo
> 1. <https://github.com/MicrosoftLearning/mslearn-ai-services/tree/main>
> 1. <https://microsoftlearning.github.io/mslearn-ai-services>
> 1. <https://microsoftlearning.github.io/mslearn-ai-services/Instructions/Exercises/01-use-azure-ai-services.html>

### Provision an Azure AI Services resource

> 1. Discussion and Demo
> 1. Azure AI services multi-service account

![Create Azure AI Services | 100x100](./Documentation/Images/AAIServices_Create.PNG)

### Retrieve the `Endpoint` and `key`

> 1. Discussion and Demo
> 1. Please place these inside your `secrets.json` which is outside your source code location, OR `appsettings.json` which is placed inside `.gitignore`
> 1. Please create an `appsettings.example.json` for reference.
> 1. Please place these inside your `.env` file.
> 1. Please create an `example.env` for reference.
> 1. Environment Variables is also another option.

![Azure AI Services Keys and Endpoints | 100x100](./Documentation/Images/AAIServices_KeysAndEndpoints.PNG)

### Executing the Text Analytics Sample in C#, and Python

> 1. Discussion and Demo

```text
Hola
Ce document est rédigé en Français.
おはようございます (ohayo gozaimasu)
காலை வணக்கம் (Kālai vaṇakkam)
सुप्रभात!
```

![Text Analysis | 100x100](./Documentation/Images/AAIServices_TextAnalysis.PNG)

![Text Analysis | 100x100](./Documentation/Images/AAIServices_TextAnalysis_SdkClient.PNG)

![Text Analysis | 100x100](./Documentation/Images/AAIServices_TextAnalysis_RestClient.PNG)

![Text Analysis | 100x100](./Documentation/Images/AAIServices_TextAnalysis_Postman.PNG)

## 3. Manage Azure AI Services Security

> 1. Discussion and Demo
> 1. <https://microsoftlearning.github.io/mslearn-ai-services/Instructions/Exercises/02-ai-services-security.html>

## Manage authentication keys

> 1. Discussion and Demo
> 1. Using Azure Portal, and Azure CLI

```powershell
$rgname="rg-ai102-dev-001"
$aaisvs="azais-ai102-dev-002"

az cognitiveservices account keys list --name $aaisvs --resource-group $rgname

az cognitiveservices account keys regenerate --name $aaisvs --resource-group $rgname --key-name key1
```

![Azure AI Services Az CLI Keys | 100x100](./Documentation/Images/AAIServices_AzCLI_Keys.PNG)

### Secure key access with Azure Key Vault

> 1. Discussion and Demo

```powershell
az ad sp create-for-rbac -n "api://<spName>" --role owner --scopes subscriptions/<subscriptionId>/resourceGroups/<resourceGroup>

az ad sp show --id <appId>

az keyvault set-policy -n <keyVaultName> --object-id <objectId> --secret-permissions get list
```

## 4. Monitor Azure AI Services

> 1. Discussion and Demo
> 1. <https://microsoftlearning.github.io/mslearn-ai-services/Instructions/Exercises/03-monitor-ai-services.html>

---

## X. SUMMARY / RECAP / Q&A

> 1. SUMMARY / RECAP / Q&A
> 2. Any open queries, I will get back through meetup chat/twitter.

---

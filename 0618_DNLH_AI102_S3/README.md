# AI 102 - Deploy Azure AI services in containers

## Date Time: 18-Jun-2024 at 09:00 AM IST

## Event URL: [https://www.meetup.com/dot-net-learners-house-hyderabad/events/300917624](https://www.meetup.com/dot-net-learners-house-hyderabad/events/300917624)

## YouTube URL: [https://www.youtube.com/watch?v=ToBeDone](https://www.youtube.com/watch?v=ToBeDone)

## MS Learn Module(s)

> 1. <https://aka.ms/AIservicesincontainers>

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
> 1. Understand containers
>    - `Docker` installed Locally
> 1. Use Azure AI services containers
> 1. Deploy Azure AI services in `Local Docker` containers
>    - Provision an Azure AI Services resource
>    - Retrieving AI Services Keys
>    - Deploy and run a Text Analytics container on Local Docker
>    - Verify Local Docker Container using `Browser`
>    - Verify Local Docker Container using `Postman`
> 1. Deploy Azure AI services containers on Azure Container Instance
>    - Deploy and run a Text Analytics container on Azure Container Instance
>    - Verify Text Analytics container on Azure Container Instance using `CURL`
>    - Verify Text Analytics container on Azure Container Instance using `Postman`
>    - Verify Text Analytics container on Azure Container Instance using `Python` Program
> 1. An Azure Kubernetes Service (AKS) cluster. **`Stretch Goal`**
> 1. SUMMARY / RECAP / Q&A

### Please refer to the [**Source Code**](https://github.com/vishipayyallore/aiml-2024/tree/main/ai102demos) of today's session for more details

---

![Information | 100x100](../Documentation/Images/SeatBelt.PNG)

---

## 1. The Big Picture

### Pre-requisites

> 1. Azure Open AI, AI/ML
> 1. Python, C#, and .NET 8

### Previous Session

> 1. **Playlist:** [https://www.youtube.com/watch?v=LSbvf_Qtwb4&list=PLdLQDTLMjAzrb3Lbg2GrGErISdmg8n7YC](https://www.youtube.com/watch?v=LSbvf_Qtwb4&list=PLdLQDTLMjAzrb3Lbg2GrGErISdmg8n7YC)

### Current Architecture

> 1. NA

## 2. Understand containers

> 1. Discussion and Demo

### 2.1. `Docker` installed Locally

> 1. Discussion and Demo

## 3. Use Azure AI services containers

> 1. Discussion and Demo

## 4. Deploy Azure AI services in `Local Docker` containers

> 1. Discussion and Demo

**Reference(s):**

> 1. <https://learn.microsoft.com/en-gb/training/modules/investigate-container-for-use-with-ai-services/1-introduction>
> 1. <https://microsoftlearning.github.io/mslearn-ai-services/Instructions/Exercises/04-use-a-container.html>
> 1. <https://learn.microsoft.com/en-us/azure/ai-services/cognitive-services-container-support>
> 1. <https://learn.microsoft.com/en-us/azure/ai-services/language-service/overview#deploy-on-premises-using-docker-containers>
> 1. <https://learn.microsoft.com/en-us/azure/ai-services/language-service/language-detection/how-to/use-containers>

### 4.1. Provision an Azure AI Services resource

> 1. Discussion and Demo

### 4.2. Retrieving AI Services Keys

> 1. Discussion and Demo

```powershell
$rgname="rg-ai102-dev-001"
$aaisvs="azais-ai102-dev-001"

az cognitiveservices account keys list --name $aaisvs --resource-group $rgname

az cognitiveservices account keys regenerate --name $aaisvs --resource-group $rgname --key-name key1
```

### 4.3. Deploy and run a Text Analytics container on Local Docker

> 1. Discussion and Demo

#### Pull in docker image

```powershell
docker pull mcr.microsoft.com/azure-cognitive-services/vision/read:3.2-model-2022-04-30
```

![Read Analytics Docker Image Pull | 100x100](./Documentation/Images/AAIServices_Docker_Pull.PNG)

#### Running the docker image

```powershell
$ApiKey="111e11c1b111111c11111c11c1c1f11e"
$BillingEndpoint="https://YourEndpoint.cognitiveservices.azure.com/"

docker run --rm -it -p 5005:5000 --memory 16g --cpus 8 mcr.microsoft.com/azure-cognitive-services/vision/read:3.2-model-2022-04-30 Eula=accept Billing=$BillingEndpoint ApiKey=$ApiKey

docker run --rm -d -p 5005:5000 --memory 16g --cpus 8 mcr.microsoft.com/azure-cognitive-services/vision/read:3.2-model-2022-04-30 Eula=accept Billing=$BillingEndpoint ApiKey=$ApiKey
```

### 4.4. Verify Local Docker Container using `Browser`

![Read Analytics Docker Image Run | 100x100](./Documentation/Images/AAIServices_Docker_Run.PNG)

### 4.5. Verify Local Docker Container using `Postman`

> 1. Discussion and Demo

![Read Analysis Docker using CURL | 100x100](./Documentation/Images/AAIServices_ReadAnalysis_Local_Postman.PNG)

## 5. Deploy Azure AI services containers on Azure Container Instance

> 1. Discussion and Demo

### 5.1. Create ACI resource, and host the AI Service container

```text
mcr.microsoft.com/azure-cognitive-services/vision/read:3.2-model-2022-04-30
Port=5000
ApiKey=YourApiKey
Billing=https://YourAccount.cognitiveservices.azure.com/
Eula=accept
FQDN=FriendlyName
```

![Azure Container Instance | 100x100](./Documentation/Images/AzureContainerInstance.PNG)

### 5.2. Verify Text Analytics container on Azure Container Instance using `Browser`

> 1. Discussion and Demo

![Read Analysis using Browser | 100x100](./Documentation/Images/AAIServices_ReadAnalysis_ACI_Browser.PNG)

### 5.3. Verify Text Analytics container on Azure Container Instance using `Postman`

> 1. Discussion and Demo

![Text Analysis using Postman | 100x100](./Documentation/Images/AAIServices_ReadAnalysis_ACI_Postman.PNG)

## 6. Deploy Azure AI services containers on Azure Kubernetes Service

![Azure Container Instance | 100x100](./Documentation/Images/AAIServices_ReadAnalysis_AKS.PNG)

![Azure Container Instance | 100x100](./Documentation/Images/AAIServices_ReadAnalysis_AKS_Browser.PNG)

---

## X. SUMMARY / RECAP / Q&A

> 1. SUMMARY / RECAP / Q&A
> 2. Any open queries, I will get back through meetup chat/twitter.

---

```powershell
curl -X POST "http://localhost:5005/text/analytics/v3.1/languages" -H "Content-Type: application/json" --data-ascii "{'documents':[{'id':1,'text':'காலை வணக்கம்'},{'id':2,'text':'Salut tout le monde.'}]}"
```

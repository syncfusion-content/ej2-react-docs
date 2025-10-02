---
layout: post
title: Azure Open AI With React AI AssistView component | Syncfusion
description:  Checkout and learn about Integration of Azure Open AI With React AI AssistView component of Syncfusion Essential JS 2 and more details.
platform: ej2-react
control: AI AssistView
documentation: ug
domainurl: ##DomainURL##
---


# Integration of Azure Open AI With AI AssistView component 

The Syncfusion AI AssistView supports integration with [Azure Open AI](https://microsoft.github.io/PartnerResources/skilling/ai-ml-academy/resources/openai), enabling advanced conversational AI features in your React applications.

## Getting Started with the AI AssistView component

Before integrating Azure Open AI, ensure that the Syncfusion AI AssistView Component is correctly rendered in your React app:

[React Getting Started Guide](../getting-started)

## Prerequisites

* Requires `Node.js` (v16 or higher) and `npm`.
* An Azure account with access to [Azure Open AI](https://microsoft.github.io/PartnerResources/skilling/ai-ml-academy/resources/openai) services and a generated API key.
* Syncfusion AI AssistView for React `@syncfusion/ej2-react-interactive-chat` installed in your project.

## Install Dependencies

Install the Syncfusion AI AssistView in your project

```bash 

npm install @syncfusion/ej2-react-interactive-chat --save

```

## Configure Azure Open AI

1. Log in to the [Azure Portal](https://portal.azure.com/#home) and navigate to your Azure Open AI resource. 

2. Under Resource Management, select Keys and Endpoint to retrieve your API key and endpoint URL.  

3. Copy the API key, endpoint, and deployment name (e.g., gpt-4o-mini). Ensure the API version matches your resource configuration.

4. Store these values securely, as they will be used in your application.

> `Security Note`: Never expose your API key in client-side code for production applications. Use a server-side proxy or environment variables to manage sensitive information securely.

##  Integration Azure Open AI with AI AssistView

Create `src/App.js` to integrate the Azure Open AI with AI AssistView component

* Update the following configuration values with your Azure Open AI details:

```bash

const azureOpenAIApiKey = 'Your_Azure_OpenAI_API_Key';
const azureOpenAIEndpoint = 'Your_Azure_OpenAI_Endpoint';
const azureOpenAIApiVersion = 'Your_Azure_OpenAI_API_Version';
const azureDeploymentName = 'Your_Deployment_Name';

```

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ai-assistview/ai-integrations/open-ai/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ai-assistview/ai-integrations/open-ai/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/ai-integrations/open-ai" %}

## Run and Test 

Run the application in the browser using the following command.

```bash

npm start

```

Open the hosted link to interact with your Azure Open AI for dynamic response.

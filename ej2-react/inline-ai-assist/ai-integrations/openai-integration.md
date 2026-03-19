---
layout: post
title: Azure OpenAI in React Inline AI Assist | Syncfusion
description: Learn about Integration of Azure OpenAI with React Inline AI Assist component of Syncfusion Essential JS 2.
platform: ej2-react
control: Inline AI Assist
documentation: ug
domainurl: ##DomainURL##
---

# Integrate Azure OpenAI With React Inline AI Assist component

The Inline AI Assist component integrates with [Azure OpenAI](https://azure.microsoft.com/en-us/products/ai-foundry/models/openai/) to enable advanced conversational AI features in your applications. The component acts as a user interface, where user prompts are sent to the Azure OpenAI service via API calls, providing natural language understanding and context-aware responses.

## Prerequisites

Before starting, ensure you have the following:

* **Node.js**: Version 16 or higher with npm.

* **Azure Account**: With access to Azure OpenAI services and a generated API key.

* **Syncfusion Inline AI Assist**: Package [@syncfusion/ej2-react-interactive-chat](https://www.npmjs.com/package/@syncfusion/ej2-react-interactive-chat) installed.

* **Marked Library**: For parsing Markdown responses (`npm install marked --save`).

## Set Up the Environment

Follow the [Getting Started](../getting-started) guide to configure and render the Inline AI Assist component in your application.

## Install Dependency

To install the marked library, run `npm install marked --save` in your project directory to add it as a dependency in your package.json file.

## Generate Azure API Key

1. Log in to the [Azure Portal](https://portal.azure.com/#home) and navigate to your Azure OpenAI resource. 

2. Under resource management, select keys and endpoint to retrieve your API key and endpoint URL.  

3. Note the following values:
   - API key
   - Endpoint
   - API version (must be supported by your resource)
   - Deployment name (for example, gpt-4o-mini)

4. Store these values securely, as they will be used in your application.

> `Security Note`: Never expose your API key in client-side code for production applications. Use a server-side proxy or environment variables to manage sensitive information securely.

## Configure Inline AI Assist with Azure OpenAI

Modify the `index.tsx` file to integrate the Azure OpenAI with the Inline AI Assist component.

* Update the following configuration values with Azure OpenAI details:

```bash

const azureOpenAIApiKey = 'Your_Azure_OpenAI_API_Key';
const azureOpenAIEndpoint = 'Your_Azure_OpenAI_Endpoint';
const azureOpenAIApiVersion = 'Your_Azure_OpenAI_API_Version';
const azureDeploymentName = 'Your_Deployment_Name';

```

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/inline-ai-assist/ai-integrations/open-ai/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/inline-ai-assist/ai-integrations/open-ai/app/index.tsx %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/inline-ai-assist/ai-integrations/open-ai/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/inline-ai-assist/ai-integrations/open-ai" %}

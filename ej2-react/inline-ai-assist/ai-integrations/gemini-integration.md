---
layout: post
title: Gemini AI in React Inline AI Assist | Syncfusion
description: Learn about Integration of Gemini AI with React Inline AI Assist component of Syncfusion Essential JS 2.
platform: ej2-react
control: Inline AI Assist
documentation: ug
domainurl: ##DomainURL##
---

# Integrate Gemini AI With React Inline AI Assist component

The Inline AI Assist component integrates with Google's [Gemini](https://ai.google.dev/gemini-api/docs) API to deliver intelligent conversational interfaces. It leverages advanced natural language understanding to interpret user input, maintain context throughout interactions, and provide accurate, relevant responses. By configuring secure authentication and data handling, developers can unlock powerful AI-driven communication features that elevate user engagement and streamline support experiences.

## Prerequisites

Before starting, ensure you have the following:

* **Node.js**: Version 16 or higher with npm.

* **Google Account**: For generating a Gemini API key.

* **Syncfusion Inline AI Assist**: Package [@syncfusion/ej2-react-interactive-chat](https://www.npmjs.com/package/@syncfusion/ej2-react-interactive-chat) installed.

* **Marked Library**: For parsing Markdown responses (`npm install marked --save`).

## Set Up the Environment

Follow the [Getting Started](../getting-started) guide to configure and render the Inline AI Assist component in your application.

## Install Dependencies

Install the required packages:

* Google Generative AI SDK:

```bash

npm install @google/generative-ai

```

* Marked Library:

```bash

npm install marked --save

```

## Generate API Key

1. Access Google AI Studio: Instructs users to sign into [Google AI Studio](https://aistudio.google.com/app/apikey) with a Google account or create a new account if needed. 

2. Navigate to API Key Creation: Go to the `Get API Key` option in the left-hand menu or top-right corner of the dashboard. Click the `Create API Key` button. 

3. Project Selection: Choose an existing Google Cloud project or create a new one.

4. API Key Generation: After project selection, the API key is generated. Users are instructed to copy and store the key securely, as it is shown only once.

> `Security Note`: Advises against committing the API key to version control and recommends using environment variables or a secret manager in production.

## Configure Gemini AI with Inline AI Assist

Modify the `index.tsx` file to integrate the Gemini API with the Inline AI Assist component.

* Add your Gemini API key securely in the configuration:

```bash

const geminiApiKey = 'Place your API key here'; 

```

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/inline-ai-assist/ai-integrations/gemini-ai/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/inline-ai-assist/ai-integrations/gemini-ai/app/index.tsx %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/inline-ai-assist/ai-integrations/gemini-ai/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/inline-ai-assist/ai-integrations/gemini-ai" %}

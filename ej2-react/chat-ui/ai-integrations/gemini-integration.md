---
layout: post
title: Gemini AI With React Chat UI component | Syncfusion
description:  Checkout and learn about Integration of Gemini AI With React AI Chat UI component of Syncfusion Essential JS 2 and more details.
platform: ej2-react
control: Chat UI
documentation: ug
domainurl: ##DomainURL##
---

# Integration of Gemini AI With Chat UI component 

The Syncfusion Chat UI supports integration with [Gemini](https://ai.google.dev/gemini-api/docs), enabling advanced conversational AI features in your React applications.

## Getting Started with the Chat UI component

Before integrating Gemini AI, ensure that the Syncfusion `Chat UI` is correctly rendered in your React app:

[React Getting Started Guide](../getting-started)

## Prerequisites

* Requires `Node.js` (v16 or higher) and `npm`.
* Google account to generate API key on accessing `Gemini AI`
* Syncfusion Chat UI for React `@syncfusion/ej2-react-interactive-chat` installed in your project.

## Install Dependencies

Install the Syncfusion Chat UI in your project

```bash 

npm install @syncfusion/ej2-react-interactive-chat --save

```

Install the Gemini AI dependencies

```bash

npm install @google/generative-ai

```

## Generate API Key

1. Go to [Google AI Studio](https://aistudio.google.com/app/apikey) and sign in with your Google account. If you don’t have one, create a new account. 

2. Once logged in, click on `Get API Key` from the left-hand menu or the top-right corner of the dashboard. 

3. Click the `Create API Key` button. You’ll be prompted to either select an existing Google Cloud project or create a new one. Choose the appropriate option and proceed. 

4. After selecting or creating a project, your API key will be generated and displayed. Copy the key and store it securely, as it will only be shown once.

> `Security Note`: Never commit the API key to version control. Use environment variables or a secret manager for production.

##  Integration Gemini AI with Chat UI

Include the below snippet in `src/App.jsx` to integrate the Syncfusion Chat UI with the Gemini AI

* Add your generated `API Key` at the line 

```bash

const geminiApiKey = 'Place your API key here'; 

```

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chat-ui/ai-integrations/gemini/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chat-ui/ai-integrations/gemini/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chat-ui/ai-integrations/gemini" %}

## Run and Test 

Run the application in the browser using the following command.

```bash

npm start

```

Open `http://localhost:4000` to interact with your Gemini AI for dynamic response.

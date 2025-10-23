---
layout: post
title: LLM Model With React AI AssistView component | Syncfusion
description:  Checkout and learn about Integration of LLM Model With React AI AssistView component of Syncfusion Essential JS 2 and more details.
platform: ej2-react
control: AI AssistView
documentation: ug
domainurl: ##DomainURL##
---

# Integrate LLM via Ollama with React AI AssistView Component

The AI AssistView component integrates with [LLM via Ollama](https://ollama.com) to enable advanced conversational AI features in your React application. The component acts as a user interface where user prompts are sent to the selected LLM model via API calls, providing natural language understanding and context-aware responses.

## Prerequisites

Before starting, ensure you have the following:

* **Node.js**: Version 16 or higher with npm.

* [Ollama](https://ollama.com) installed to run and manage LLM models locally.

* **Syncfusion AI AssistView**: Package [@syncfusion/ej2-react-interactive-chat](https://www.npmjs.com/package/@syncfusion/ej2-react-interactive-chat) installed.

* **Marked Library**: For parsing Markdown responses (`npm install marked --save`).

## Set Up the React Environment

Follow the Syncfusion AI AssistView [Getting Started](../getting-started) guide to configure and render the AI AssistView component in your React application.

## Install Dependency

To install the marked library, run `npm install marked --save` in your project directory to add it as a dependency in your package.json file.
 
## Configuring Ollama

Install Ollama for your operating system:

{% tabs %}
{% highlight ts tabtitle="Windows" %}

1. Visit [Windows](https://ollama.com/download)
2. Click `Download for Windows` to get the `.exe installer`. 
3. Run `OllamaSetup.exe` and follow the wizard to install.

{% endhighlight %}

{% highlight ts tabtitle="macOS" %}

1. Visit [macOS](https://ollama.com/download/mac)
2. Click `Download for macOS` to get `.dmg file`
3. Install it by following the wizard.

{% endhighlight %}

{% highlight ts tabtitle="Linux" %}

1. Visit [Linux](https://ollama.com/download/linux)
2. Run the below command to install Ollama in your system

```bash
        
curl -fsSL https://ollama.com/install.sh | sh

```
{% endhighlight %}
{% endtabs %}

## Download and run an Ollama model

* Download and run a model using the following command. Replace `deepseek-r1` with your preferred model (e.g., `llama3`, `phi4`). See the [Ollama model](https://ollama.com/search) library for available models.
 
```bash

ollama run deepseek-r1

```

* After the model download completes, start the Ollama server to make the model accessible:

```bash

ollama serve

```

## Configure AI AssistView with Ollama

To integrate Ollama with the Syncfusion AI AssistView component in your React application:

* Modify the `src/App.js` file to host the integration logic.

* Configure the connection to the Ollama server (typically running on `http://localhost:11434`).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ai-assistview/ai-integrations/llm-model/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ai-assistview/ai-integrations/llm-model/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/ai-integrations/llm-model" %}

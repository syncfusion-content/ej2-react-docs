---
layout: post
title: Lite LLM Model in React Inline AI Assist | Syncfusion
description: Learn about Integration of Lite LLM Model with React Inline AI Assist component of Syncfusion Essential JS 2.
platform: ej2-react
control: Inline AI Assist
documentation: ug
domainurl: ##DomainURL##
---

# Integrate React Inline AI Assist With Lite LLM

The **Inline AI Assist** component can also be integrated with [LiteLLM](https://docs.litellm.ai/docs), an open-source proxy that provides a unified, OpenAI-compatible API for multiple LLM providers such as [OpenAI](https://openai.com) and [Azure OpenAI](https://azure.microsoft.com/en-us/products/ai-foundry/models/openai).

In this setup:

* **Inline AI Assist** serves as the user interface for entering prompts.
* Prompts are sent to the **LiteLLM proxy**, which forwards them to the configured LLM provider.
* The LLM provider processes the prompt and returns a response through LiteLLM.
* This enables **natural language understanding** and **context-aware responses** without changing the Inline AI Assist integration logic, as LiteLLM uses the same OpenAI-style API.

## Prerequisites

Before starting, ensure you have the following:

* **Node.js**: Version **16 or higher** with **npm** installed.

* **OpenAI Account**: Access to OpenAI services and a generated **API key**.

* **Python**: Required to run the **LiteLLM proxy**.

* **Syncfusion Inline AI Assist**: Package [@syncfusion/ej2-react-interactive-chat](https://www.npmjs.com/package/@syncfusion/ej2-react-interactive-chat) installed.

* **Marked Library**: For parsing Markdown responses

* **Marked Library**: For parsing Markdown responses (`npm install marked --save`).

## Configure Inline AI Assist with LiteLLM

To integrate **LiteLLM** with the **Syncfusion Inline AI Assist** component, update the `index.tsx` file in your React application. The component will send user prompts to the LiteLLM proxy, which forwards them to the configured LLM provider (e.g., **OpenAI** or **Azure OpenAI**) and returns natural language responses.

In the following example:

* The [promptRequest](../api/inline-ai-assist#promptrequest) event sends the user prompt to the LiteLLM proxy at `/v1/chat/completions`.
* The proxy uses the **model alias** defined in `config.yaml` (e.g., `openai/gpt-4o-mini`) and routes the request to the actual LLM provider.
* The response is parsed as **Markdown** using the `marked` library and displayed in the Inline AI Assist component.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/inline-ai-assist/ai-integrations/lite-llm/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/inline-ai-assist/ai-integrations/lite-llm/app/index.tsx %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/inline-ai-assist/ai-integrations/lite-llm/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/inline-ai-assist/ai-integrations/lite-llm" %}

## Run and test

### Start the proxy:

Navigate to your project folder and run the following command to start the proxy:

```bash
pip install "litellm[proxy]"
litellm --config "./config.yaml" --port 4000 --host 0.0.0.0
```

### Start the frontend:

In a separate terminal window, navigate to your project folder, start the React application

```bash
npm start
```

Open your app to interact with the Inline AI Assist component integrated with LiteLLM.

## Troubleshooting
* `401 Unauthorized`: Verify your `API_KEY` and model deployment name.
* `Model not found`: Ensure model matches `model_name` in `config.yaml`.
* `CORS issues`: Configure `router_settings.cors_allow_origins` properly.

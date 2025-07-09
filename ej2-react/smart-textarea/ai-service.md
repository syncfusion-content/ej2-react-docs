---
layout: post
title: AI Service in ##Platform_Name## TextArea component | Syncfusion
description: Learn here all about configuring the AI service in Syncfusion ##Platform_Name## TextArea component of Syncfusion Essential JS 2 and more.
platform: ej2-react
control: AI Service 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to configure backend AI Service for React Smart TextArea Component

This guide walks you through the steps to configure a backend AI service that powers the React TextArea component using Node.js and the ai SDK by Vercel. With this setup, users can seamlessly switch between multiple AI models (Azure OpenAI, Google Gemini, Groq, etc.) using a unified API interface. This approach ensures that reduce model API interface complexities, sensitive API keys and data remain secure on the server side, enhancing both security and flexibility.

## Prerequisites

* [Getting Started with React TextArea component](https://ej2.syncfusion.com/react/documentation/smart-textarea/getting-started)

* [Create an Azure Web App to Host the Node Service](https://learn.microsoft.com/en-us/azure/app-service/quickstart-nodejs?tabs=linux&pivots=development-environment-vscode#set-up-your-initial-environment)

* [Create an Node.js application](https://learn.microsoft.com/en-us/azure/app-service/quickstart-nodejs?tabs=linux&pivots=development-environment-vscode#create-your-nodejs-application)

## Installing AI SDK Package

After node application created, install your preferred text generative AI SDK package by running the following command in the terminal:

{% tabs %}
{% highlight bash tabtitle="Azure OpenAI" %}

npm install ai @ai-sdk/azure

{% endhighlight %}
{% highlight bash tabtitle="Gemini" %}

npm install ai @ai-sdk/google

{% endhighlight %}
{% highlight bash tabtitle="Anthropic" %}

npm install ai @ai-sdk/anthropic

{% endhighlight %}
{% endtabs %}

To know more about the AI SDK, refer to the [AI SDK documentation](https://sdk.vercel.ai/docs/introduction) and [Providers](https://ai-sdk.dev/providers/ai-sdk-providers).

## Configure AI model

* Create a new file named `ai-service.js` in the root directory of your node application and add the following code to configure the AI model based on your preferred AI service.

{% tabs %}
{% highlight ts tabtitle="Azure OpenAI" %}

const { generateText } = require("ai");
const { createAzure } = require('@ai-sdk/azure');

const azure = createAzure({
    resourceName: 'RESOURCE_NAME',
    apiKey: 'API_KEY',
});

const aiModel = azure('MODEL_NAME'); // Update the model here

async function getAIRequest(options) {
    try {
        const result = await generateText({
            model: aiModel,
            messages: options.messages,
            topP: options.topP,
            temperature: options.temperature,
            maxTokens: options.maxTokens,
            frequencyPenalty: options.frequencyPenalty,
            presencePenalty: options.presencePenalty,
            stopSequences: options.stopSequences
        });
        return result.text;
    } catch (err) {
        console.error("Error occurred:", err);
        return null;
    }
}

module.exports = {
    getAIRequest
};

{% endhighlight %}
{% highlight ts tabtitle="Gemini" %}

const { generateText } = require("ai");
const { createGoogleGenerativeAI } = require('@ai-sdk/google');

const gemini = createGoogleGenerativeAI({
    baseURL: "https://generativelanguage.googleapis.com/v1beta",
    apiKey: "API_KEY"
});

const aiModel = gemini('MODEL_NAME'); // Update the model here

async function getAIRequest(options) {
    try {
        const result = await generateText({
            model: aiModel,
            messages: options.messages,
            topP: options.topP,
            temperature: options.temperature,
            maxTokens: options.maxTokens,
            frequencyPenalty: options.frequencyPenalty,
            presencePenalty: options.presencePenalty,
            stopSequences: options.stopSequences
        });
        return result.text;
    } catch (err) {
        console.error("Error occurred:", err);
        return null;
    }
}

module.exports = {
    getAIRequest
};

{% endhighlight %}
{% highlight ts tabtitle="Anthropic" %}

const { generateText } = require("ai");
const { createAnthropic } = require('@ai-sdk/anthropic');

const claude = createAnthropic({
    baseURL: 'https://api.anthropic.com/v1',
    apiKey: 'API_KEY',
});

const aiModel = claude('MODEL_NAME'); // Update the model here

export async function getAIRequest(options) {
    try {
        const result = await generateText({
            model: aiModel,
            messages: options.messages,
            topP: options.topP,
            temperature: options.temperature,
            maxTokens: options.maxTokens,
            frequencyPenalty: options.frequencyPenalty,
            presencePenalty: options.presencePenalty,
            stopSequences: options.stopSequences
        });
        return result.text;
    } catch (err) {
        console.error("Error occurred:", err);
        return null;
    }
}

module.exports = {
    getAIRequest
};

{% endhighlight %}
{% endtabs %}

* Update the `MODEL_NAME` and `API_KEY` in the `ai-service.js` file with the appropriate values. To get the model name, refer to your preferred AI SDK provider's documentation [Azure OpenAI](https://ai-sdk.dev/providers/ai-sdk-providers/azure#language-models), [Google Generative AI](https://ai-sdk.dev/providers/ai-sdk-providers/google-generative-ai#language-models) or [Anthropic](https://ai-sdk.dev/providers/ai-sdk-providers/anthropic#language-models).

* To enable cross-origin requests, install the [cors](https://www.npmjs.com/package/cors) package by running the following command in your terminal:

```bash
npm install cors
```

* This will allow your frontend application running on `localhost:5173` to make requests to your Express backend on `localhost:3000`. If you want more control over which origins can access your API, you can configure the CORS middleware with options in the `app.js` file:

{% tabs %}
{% highlight js tabtitle="app.js" %}

var cors = require('cors');

app.use(cors({
  origin: 'http://localhost:5173', // Allow only your frontend origin
  methods: ['GET', 'POST'],        // Allow only specific methods
  allowedHeaders: ['Content-Type'] // Allow only specific headers
}));

{% endhighlight %}
{% endtabs %}

* Add the following code to your `routes/index.js` file to handle the POST request:

{% tabs %}
{% highlight js tabtitle="Azure OpenAI" %}

var express = require('express');
var router = express.Router();
const { getAIRequest } = require('../ai-service');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* POST chat endpoint */
router.post('/chat', async function(req, res, next) {
  try {
    const options = req.body;
    const response = await getAIRequest(options);
    
    if (response === null) {
      return res.status(500).json({ error: 'Failed to get response from AI service' });
    }
    
    res.json({ response });
  } catch (error) {
    console.error('Error in chat endpoint:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;

{% endhighlight %}
{% endtabs %}

* Now, start your node.js server by running the following command in your terminal:

```bash
npm start
```

## Integrate React TextArea with AI Service

* After backend setup, you can integrate the React TextArea with the AI service. Update the `SeverAIRequest` function in the `src/ai-components/smarttextarea/smart-textarea.tsx` file to make a POST request to the `/chat` endpoint:

{% tabs %}
{% highlight ts tabtitle="smart-textarea.tsx" %}

import { SmartTextAreaComponent, ChatParameters } from '@syncfusion/ej2-react-inputs'
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import './smart-textarea.css';

function SmartTextarea() {
    let textareaObj: SmartTextAreaComponent;
    const phrasesData: string[] = [
        "Please find the attached report.",
        "Let's schedule a meeting to discuss this further.",
        "Can you provide an update on this task?",
        "I appreciate your prompt response.",
        "Let's collaborate on this project to ensure timely delivery."
    ];
    const rolesData: string[] = [
        "Maintainer of an open-source project replying to GitHub issues",
        "Employee communicating with internal team",
        "Customer support representative responding to customer queries",
        "Sales representative responding to client inquiries"
    ];

    let presets: any = [
        {
            userRole: "Maintainer of an open-source project replying to GitHub issues",
            userPhrases: [
                "Thank you for contacting us.",
                "To investigate, we'll need a repro as a public Git repo.",
                "Could you please post a screenshot of NEED_INFO?",
                "This sounds like a usage question. This issue tracker is intended for bugs and feature proposals. Unfortunately, we don't have the capacity to answer general usage questions and would recommend StackOverflow for a faster response.",
                "We don't accept ZIP files as repros."
            ]
        },
        {
            userRole: "Customer support representative responding to customer queries",
            userPhrases: [
                "Thank you for reaching out to us.",
                "Can you please provide your order number?",
                "We apologize for the inconvenience.",
                "Our team is looking into this issue and will get back to you shortly.",
                "For urgent matters, please call our support line."
            ]
        },
        {
            userRole: "Employee communicating with internal team",
            userPhrases: [
                "Please find the attached report.",
                "Let's schedule a meeting to discuss this further.",
                "Can you provide an update on this task?",
                "I appreciate your prompt response.",
                "Let's collaborate on this project to ensure timely delivery."
            ]
        },
        {
            userRole: "Sales representative responding to client inquiries",
            userPhrases: [
                "Thank you for your interest in our product.",
                "Can I schedule a demo for you?",
                "Please find the pricing details attached.",
                "Our team is excited to work with you.",
                "Let me know if you have any further questions."
            ]
        }
    ];

        const serverAIRequest = async (options: ChatParameters) => {
            let output: string = '';
            try {
                // Call the API endpoint
                const response = await fetch('http://localhost:3000/chat', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(options),
                });
                if (!response.ok) {
                    throw new Error(`API request failed with status ${response.status}`);
                }
                const data = await response.json();
                output = data.response;
            } catch (error) {
                console.error("Error:", error);
            }
            return output;
        };

    function onChange(args: any) {
        let selectedRole: string = args.value;
        let selectedPreset: any = presets.find((preset: any) => preset.userRole === selectedRole);
        textareaObj.userRole = selectedRole;
        textareaObj.UserPhrases = selectedPreset.userPhrases;
    }

    return (
        <div className='control-pane'>
            <div className='control-section'>
                <div className="description-container e-card">
                    <div className='e-card-content '>
                    <p>The <b>SmartTextArea</b> is an AI-powered version of Syncfusion's TextArea that adds smart autocompletion. It helps by suggesting complete sentences based on user input, making typing faster and easier.</p>
                    <p>Select a user role <i>Maintainer of an open-source project replying to GitHub issues</i> and start typing <i>Create an issue</i>. It will automatically complete the text based on the selected user role.. Know more <a href="https://github.com/syncfusion/smart-ai-samples/blob/master/react/src/ai-components/smarttextarea/Readme.md">here</a>.</p>
                    </div>
                </div>
                <div className="content-wrapper smart-text">
                    <div className="example-label">Select a role</div>
                    <DropDownListComponent type="text" id='user-role'
                        dataSource={rolesData}
                        width='90%'
                        placeholder="Select a role"
                        value="Maintainer of an open-source project replying to GitHub issues"
                        popupHeight="200px"
                        change={onChange}
                    />
                    <br />
                    <div className='smart-component'>
                        <SmartTextAreaComponent
                            id='smart-textarea'
                            ref={(textarea) => { textareaObj = textarea as SmartTextAreaComponent; }}
                            placeholder={'Enter your queries here'}
                            floatLabelType={'Auto'}
                            rows={5}
                            userRole={'Employee communicating with internal team'}
                            UserPhrases={phrasesData}
                            aiSuggestionHandler={serverAIRequest}
                        ></SmartTextAreaComponent>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SmartTextarea;

{% endhighlight %}
{% endtabs %}

* Now request will post to the backend node.js application and the response will be displayed in the form.

## Deploy node application

* To deploy the node application by following the documentation [here](https://learn.microsoft.com/en-us/azure/app-service/quickstart-nodejs?tabs=linux&pivots=development-environment-vscode#deploy-to-azure).

* Once application deployed, users will get web service url like `https://<app-name>-<random-hash>.<region>.azurewebsites.net`. Update the azure web app url in the `serverAIRequest` function.

{% tabs %}
{% highlight ts tabtitle="smart-textarea.tsx" %}

const serverAIRequest = async (options: ChatParameters) => {
    let output: string = '';
    try {
        // Call the API endpoint
        const response = await fetch(`https://<app-name>-<random-hash>.<region>.azurewebsites.net/chat`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(options),
        });
        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
        }
        const data = await response.json();
        output = data.response;
    } catch (error) {
        console.error("Error:", error);
    }
    return output;
};

{% endhighlight %}
{% endtabs %}


* Now request will post to the deployed web service and the response will be displayed in the form.
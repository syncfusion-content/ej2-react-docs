---
layout: post
title: AI Service in ##Platform_Name## Smart Paste Button component | Syncfusion
description: Learn here all about configuring the AI service in Syncfusion ##Platform_Name## Smart Paste Button component of Syncfusion Essential JS 2 and more.
platform: ej2-react
control: AI Service 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# How to Configure backend AI Service for React Smart Paste Button Component

This guide walks you through the steps to configure a backend AI service that powers the React Smart Paste Button component using Node.js and the ai SDK by Vercel. With this setup, users can seamlessly switch between multiple AI models (Azure OpenAI, Google Gemini, Groq, etc.) using a unified API interface. This approach ensures that reduce model API interface complexities, sensitive API keys and data remain secure on the server side, enhancing both security and flexibility.

## Prerequisites

* [Getting Started with React Smart Paste Button component](https://ej2.syncfusion.com/react/documentation/smart-paste-button/getting-started/)

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

## Integrate React Smart Paste Button with AI Service

* After backend setup, you can integrate the React Smart Paste Button with the AI service. Update the `SeverAIRequest` function in the `src/ai-components/smartpaste/smart-paste.tsx` file to make a POST request to the `/chat` endpoint:

{% tabs %}
{% highlight ts tabtitle="smart-paste.tsx" %}

import { useEffect } from 'react';
import { ButtonComponent, ChatOptions, SmartPasteButtonComponent } from "@syncfusion/ej2-react-buttons";
import { TextBoxComponent, TextAreaComponent } from "@syncfusion/ej2-react-inputs";
import { RadioButtonComponent } from "@syncfusion/ej2-react-buttons";
import { ComboBoxComponent } from "@syncfusion/ej2-react-dropdowns";
import { createSpinner, hideSpinner, showSpinner } from '@syncfusion/ej2-react-popups';
import './smart-paste.css';

function SmartPaste() {
    useEffect(() => {
        createSpinner({
            target: document.getElementById('bug-data-form')!,
        });
        buttonInstance = {
            button1: copyButton1.element,
            button2: copyButton2.element,
        };
        (document.querySelector('#reproduce-steps') as HTMLElement).addEventListener('change', () => {
            hideSpinner(document.getElementById('bug-data-form') as HTMLElement);
        });
    }, []);
    let buttonInstance: { [key: string]: HTMLElement | null } = {};
    const idArray: string[] = ['1', '2'];
    let copyButton1: ButtonComponent;
    let copyButton2: ButtonComponent;

    const serverAIRequest = async (options: ChatOptions) => {
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

    const smartPasteClickHandler = () => {
        showSpinner(document.getElementById('bug-data-form') as HTMLElement);
    }

    async function copyContent(id: string) {
        let text = document.getElementById('copy-content' + id)?.innerText;
        await navigator.clipboard.writeText(text as string);
        let inactive: string = idArray.filter((item) => item !== id)[0];
        buttonInstance['button' + inactive]?.querySelector('span')?.classList.replace('e-check', 'e-copy');
        buttonInstance['button' + id]?.querySelector('span')?.classList.replace('e-copy', 'e-check');
    }

    return (
        <>
            <div className="description-container e-card">
                <div className='e-card-content'>
                    <p>
                        The <b>SmartPasteButton</b> is an AI-powered upgrade of Syncfusion's Button, adding smart pasting
                        features. It uses AI to paste clipboard data in the right context and format automatically.
                    </p>
                    <p>
                        To quickly fill out the bug report form, copy the sample content and click the Smart Paste button. Know
                        more <a
                            href="https://github.com/syncfusion/smart-ai-samples/blob/master/react/src/ai-components/smartpaste/Readme.md">here</a>.
                    </p>
                </div>
            </div>
            <div id="bug-data-form">
                <form className="form-container container bug-form-container" style={{
                    maxWidth: "900px",
                    lineHeight: "35px", backgroundColor: "#f3f4f6"
                }}>
                    <div className="single-row-group">
                        <label htmlFor="bug-name" className="e-form-label">Bug Name</label>
                        <TextBoxComponent id="bug-name" placeholder="What's the bug ?" floatLabelType="Never" />
                    </div>
                    <div className="row-group">
                        <div>
                            <label htmlFor="reporter-name" className="e-form-label">Reporter</label>
                            <TextBoxComponent id="reporter-name" placeholder="Who is the reporter ?" floatLabelType="Never" />
                        </div>
                        <div>
                            <label htmlFor="submitted-date" className="e-form-label">Submitted Date</label>
                            <TextBoxComponent id="submitted-date" placeholder="When it is reported ?" floatLabelType="Never" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="bug-description" className="e-form-label">Bug Description</label>
                        <TextAreaComponent id="bug-description" placeholder="Describe a little about the bug." rows={2} floatLabelType="Never" />
                    </div>
                    <div className="row-group">
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <label htmlFor="reproduce-steps" className="e-form-label">Reproduce Steps</label>
                            <TextAreaComponent id="reproduce-steps" placeholder="Enter the repro steps here.." cols={30} rows={4} floatLabelType="Never" />
                        </div>
                        <div>
                            <label className="form-label">Bug Priority</label>
                            <div className="row">
                                <RadioButtonComponent id="radio1" label="Low" name="bug-priority" value="low" />
                            </div>
                            <div className="row">
                                <RadioButtonComponent id="radio2" label="Medium" name="bug-priority" value="medium" checked={true} />
                            </div>
                            <div className="row">
                                <RadioButtonComponent id="radio3" label="High" name="bug-priority" value="high" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="browser" className="form-label">Select the browser</label>
                        <ComboBoxComponent id="browser" popupHeight='230px' dataSource={['Chrome', 'Firefox', 'Safari']} placeholder='Choose the browser' />
                    </div>
                    <div className="form-footer">
                        <ButtonComponent type="reset" id="reset" content="Reset" iconCss="e-icons e-reset" className="form-button" />
                        <SmartPasteButtonComponent type="button" id="smart-paste" className="form-button"
                            isPrimary={true}
                            content={'Smart Paste'}
                            iconCss={"e-icons e-paste"}
                            onClick={smartPasteClickHandler}
                            aiAssistHandler={serverAIRequest} />
                    </div>
                </form>
            </div>

            <div className="col-lg-12 property-section" style={{ paddingTop: '5px' }}>
                <h4 style={{ textAlign: 'center', fontSize: '1.2rem' }}> Sample content </h4>
                <div className="content-flexed">
                    <div className="content-body" data-index="0">
                        <div className="copy-container" style={{ float: 'right' }}>
                            <ButtonComponent ref={btn => copyButton1 = btn as ButtonComponent} id="copy1" onClick={() => copyContent('1')} aria-label="content-copy-button" className="e-control e-btn e-lib custom-copy-icon e-primary e-icon-btn">
                                <span className="e-icons e-copy e-btn-icon"></span>
                            </ButtonComponent>
                        </div>
                        <div id="copy-content1">
                            Hi, this is Alice. On July 3rd, I've come across a bug where the dropdown menu in the navigation bar doesn't close after selecting an item. I just navigated to the homepage, opened the dropdown menu in the navigation bar, clicked an item in the dropdown and then the issue occurred which happens only on Chrome. Though this doesn't seem like a serious/important bug, kindly look into it and resolve it. Regards, J Alice Abraham
                        </div>
                    </div>
                    <div className="content-body" data-index="1">
                        <div className="copy-container" style={{ float: 'right' }}>
                            <ButtonComponent ref={btn => copyButton2 = btn as ButtonComponent} id="copy2" onClick={() => copyContent('2')} aria-label="content-copy-button" className="e-control e-btn e-lib custom-copy-icon e-primary e-icon-btn">
                                <span className="e-icons e-copy e-btn-icon"></span>
                            </ButtonComponent>
                        </div>
                        <div id="copy-content2">
                            Hi, Whenever I type something in the search bar and hit search, it doesn't return any results, even for items I know exist. This problem was noticed by Jane Smith on July 5th in FireFox browser. You can repro the issue by opening the site in the Firefox browser and navigate to the search bar. Type in any search term, including items that are known to exist, and click the search button. The search functionality fails to return any results, displaying an empty result set even for valid queries. This is quite important, but not urgent. Please look into it. Regards, M William Marker.
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SmartPaste;

{% endhighlight %}
{% endtabs %}

* Now request will post to the backend node.js application and the response will be displayed in the form.

## Deploy node application

* To deploy the node application by following the documentation [here](https://learn.microsoft.com/en-us/azure/app-service/quickstart-nodejs?tabs=linux&pivots=development-environment-vscode#deploy-to-azure).

* Once application deployed, users will get web service url like `https://<app-name>-<random-hash>.<region>.azurewebsites.net`. Update the azure web app url in the `serverAIRequest` function.

{% tabs %}
{% highlight ts tabtitle="smart-paste.tsx" %}

const serverAIRequest = async (options: ChatOptions) => {
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
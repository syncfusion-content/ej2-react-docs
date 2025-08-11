---
layout: post
title: Getting started with React Smart TextArea component | Syncfusion
description:  Checkout and learn about Getting started with React Smart TextArea component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with React Smart TextArea Component

The **Smart TextArea** is an advanced component designed to elevate the text input experience by providing intelligent autocomplete suggestions for entire sentences through text-generative AI functionality. This component enhances user productivity by predicting and offering relevant completions based on the context of what is being typed.

This section briefly explains how to create a simple Smart TextArea and demonstrate the basic functionalities of the Smart TextArea component in an React environment.

## Prerequisites

* [System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> React UI components](https://ej2.syncfusion.com/react/documentation/system-requirement)
* [OpenAI](https://github.com/syncfusion/smart-ai-samples/blob/master/react/README.md#openai) or [Azure OpenAI Account](https://learn.microsoft.com/en-us/azure/ai-services/openai/how-to/create-resource)

## Dependencies

The following list of dependencies are required to use the Smart TextArea component in your application.

```javascript
|-- @syncfusion/ej2-react-inputs
    |-- @syncfusion/ej2-react-base
    |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-base
```

## Create the React application

To easily set up a React application, use `create-vite-app`, which provides a faster development environment, smaller bundle sizes, and optimized builds compared to traditional tools like `create-react-app`. For detailed steps, refer to the Vite [installation instructions](https://vitejs.dev/guide/). Vite sets up your environment using JavaScript and optimizes your application for production.

> **Note:**  To create a React application using `create-react-app`, refer to this [documentation](https://ej2.syncfusion.com/react/documentation/getting-started/create-app) for more details.

To create a new React application, run the following command.

```bash
npm create vite@latest my-app
```
To set-up a React application in TypeScript environment, run the following command.

```bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm run dev
```
To set-up a React application in JavaScript environment, run the following command.

```bash
npm create vite@latest my-app -- --template react
cd my-app
npm run dev
```


## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> packages

All the available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry.
You can choose the component that you want to install. For this application, we are going to use Smart TextArea component.

To install Smart TextArea component, use the following command

{% tabs %}
{% highlight bash tabtitle="CMD" %}

npm install @syncfusion/ej2-react-inputs --save

{% endhighlight %}
{% endtabs %}

The above package installs [Input dependencies](./getting-started/#dependencies) which are required to render the Smart TextArea component in React environment.

## Adding Style sheet to the Application

Add Smart TextArea component's styles as given below in `App.css`.

{% tabs %}
{% highlight css tabtitle="style.css" %}

@import "../node_modules/@syncfusion/ej2-base/styles/fluent2.css";
@import "../node_modules/@syncfusion/ej2-react-inputs/styles/fluent2.css";

{% endhighlight %}
{% endtabs %}

## Adding Smart TextArea to the application

To include the Smart TextArea component in your application import the `SmartTextAreaComponent` from `ej2-react-inputs` package in `App.tsx`. In **Smart TextArea**, the [aiSuggestionHandler](https://ej2.syncfusion.com/react/documentation/api/smart-textarea#aisuggestionhandler) property, which sends prompts to the `AI` model and receives context-aware suggestions. These suggestions appear inline for non-touch devices and as an overlay popup for touch devices by default, helping users type faster and more accurately.

{% tabs %}
{% highlight ts tabtitle="App.tsx" %}

import { ChatParameters, SmartTextAreaComponent } from '@syncfusion/ej2-react-inputs'

function SmartTextarea() {
    const phrasesData: string[] = [
        "Please find the attached report.",
        "Let's schedule a meeting to discuss this further.",
        "Can you provide an update on this task?",
        "I appreciate your prompt response.",
        "Let's collaborate on this project to ensure timely delivery."
    ];

    const serverAIRequest = async (settings: ChatParameters) => {
        let output = '';
        try {
            const response = await getAzureChatAIRequest(settings) as string;
            output = response;
        } catch (error) {
            console.error("Error:", error);
        }
        return output;
    };

    return (
        <div className='control-pane'>
            <div className='control-section'>
                    <div className='smart-component'>
                        <SmartTextAreaComponent
                            id='smart-textarea'
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
    );
}

export default SmartTextarea;

{% endhighlight %}
{% endtabs %}

## Running the application

Now run the `npm run dev` command in the console to start the development server. This command compiles your code and serves the application locally, opening it in the browser.

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm run dev

{% endhighlight %}
{% endtabs %}

* The following example shows the Smart TextArea component, and users can integrate any text-generative AI of their choice.

{% tabs %}
{% highlight ts tabtitle="App.tsx" %}

import { ChatParameters, SmartTextAreaComponent } from '@syncfusion/ej2-react-inputs'
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { getAzureChatAIRequest } from './ai-models';

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
    const serverAIRequest = async (settings: ChatParameters) => {
        let output = '';
        try {
            const response = await getAzureChatAIRequest(settings) as string;
            output = response;
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
{% highlight ts tabtitle="ai-models.ts" %}

import { generateText } from "ai"
import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { createAzure } from '@ai-sdk/azure';
import { createOpenAI } from '@ai-sdk/openai';

//Warning: Do not expose your API key in the client-side code. This is only for demonstration purposes.

const google = createGoogleGenerativeAI({
    baseURL: "https://generativelanguage.googleapis.com/v1beta",
    apiKey: "API_KEY"
});
const azure = createAzure({
    resourceName: 'RESOURCE_NAME',
    apiKey: 'API_KEY',
});
const groq = createOpenAI({
    baseURL: 'https://api.groq.com/openai/v1',
    apiKey: 'API_KEY',
});

const aiModel = azure('MODEL_NAME'); // Update the model here

export async function getAzureChatAIRequest(options: any) {
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

{% endhighlight %}
{% endtabs %}

* Type 'To investigate' to experience instant sentence autocompletion.

![Syncfusion Smart TextArea - Output](./images/smart-textarea-userphrases.gif)

> [View Sample in GitHub](https://github.com/syncfusion/smart-ai-samples/tree/master/react/src/ai-components/smarttextarea).
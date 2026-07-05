---
layout: post
title: Generative UI in React AI AssistView control | Syncfusion
description: Checkout and learn about generative UI with React AI AssistView control of Syncfusion Essential JS 2 and more.
platform: ej2-react
control: AI AssistView 
documentation: ug
domainurl: ##DomainURL##
---

# Generative UI in React AI AssistView component

The `Generative UI` in AI AssistView allows you to render dynamic tools and UI elements within the AI AssistView. This enables seamless integration of interactive components based on AI-generated responses.

## Register tools

You can register custom tools using the [registerToolUI](../api/ai-assistview#registertoolui) method. It accepts tool name as string values, template and optional handler function. Tools are invoked by their name within block responses added through `addPromptResponse` method.

> **Note:** Use the blockType as `tool` and provide the tool name with the required properties through `props`. Tool should be registered before adding in responses and tool name should be unique.

### Configure tool template and handler

When registering a tool, you can configure how it appears by specifying a template and implement its behavior through a handler function. The template controls the UI layout, while the handler is provided with the container element and any additional actions needed to enable interactive functionality.

## Add tools in prompt responses

Use the [addPromptResponse](../api/ai-assistview#addpromptresponse) method to dynamically add tools to AI responses by passing the tool blocks in the response.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ai-assistview/register-tool/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ai-assistview/register-tool/app/index.tsx %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/ai-assistview/generative-ui/register-tool" %}

## Configure AI for generative UI responses

You can configure the AI service to return structured JSON blocks through `system prompt`. This ensures that AI-generated content is properly formatted and rendered as interactive tools or text blocks.

The following example demonstrates how to connect your AI service to generate and display dynamic UI components within the AI AssistView.

```tsx
import React, { useRef } from 'react';
import { AIAssistViewComponent } from '@syncfusion/ej2-react-interactive-chat';

export default function App() {
  const aiAssistViewRef = useRef(null);

  const systemPrompt = `    
    You are an AI assistant that generates Syncfusion AIAssistView blocks.
    
    Return ONLY valid JSON.
    
    Output format:
    {
        "blocks": [
            {
                "blockType": "text",
                "content": "Description"
            },
            {
                "blockType": "tool",
                "toolName": "toolname",
                "props": { ... }
            }
        ]
    }
    Rules:
    1. Always return a single "blocks" array.
    2. Return ONLY valid JSON.
    3. You may return ANY number of blocks.
    4. Whenever weather-related queries are requested, invoke the weather-tool block with blockType "tool" and toolName "weather-tool".
`;

  const weatherTemplate = (args) => {
    return (
      <div tabIndex={0} className="e-card" id="weather_card" role="button">
        <div className="e-card-header">
          <div className="e-card-header-caption">
            <div className="e-card-header-title">{args.location}</div>
            <div className="e-card-sub-title">{args.temperature}</div>
          </div>
        </div>
      </div>
    );
  };

  const onPromptRequest = async (args) => {
    const apiKey = ''; // Your API key here
    const url = ''; // Your AI response URL here
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + apiKey
        },
        body: JSON.stringify({
          model: 'gpt-5',
          messages: {
            messages: [
              { role: 'system', content: systemPrompt },
              { role: 'user', content: args.prompt }
            ]
          },
          max_output_tokens: 1000
        })
      });

      const message = reply.output.find((item) => item.type === 'message');
      const jsonText = (message && message.content && message.content[0] && message.content[0].text) || '{}';
      const aiData = JSON.parse(jsonText);

      if (aiAssistViewRef.current) {
        aiAssistViewRef.current.addPromptResponse({ blocks: aiData.blocks });
      }

    } catch (error) {
      if (aiAssistViewRef.current) {
        aiAssistViewRef.current.addPromptResponse("We could not reach the AI service; please try again later.");
      }
    }
  };

  return (
    <AIAssistViewComponent
      ref={aiAssistViewRef}
      promptRequest={onPromptRequest}
      toolRegistration={() => {
        if (aiAssistViewRef.current) {
          aiAssistViewRef.current.registerToolUI({
            toolName: 'weather-tool',
            template: weatherTemplate
          });
        }
      }}
    />
  );
}
```

---
layout: post
title: Custom views in React AI AssistView component | Syncfusion
description:  Checkout and learn about Custom views with React AI AssistView component of Syncfusion Essential JS 2 and more details.
platform: ej2-react
control: AI AssistView
documentation: ug
domainurl: ##DomainURL##
---

# Custom views in React AI AssistView component

## Adding custom views

By using the `ViewsDirective` tag you can define the collection of different assist view models in the AI AssistView. You can customize the default and the custom views added.

#### Setting view type

You can set the type of view by using the `type` property within the `ViewDirective` tag. It accepts two values such as `Assist` and `Custom`.

{% raw %}
```ts

import { AIAssistViewComponent, PromptRequestEventArgs, ViewsDirective, ViewDirective } from '@syncfusion/ej2-react-interactive-chat';
import * as React from 'react';
import * as ReactDOM from "react-dom";

function App() {

    const assistInstance = React.useRef<AIAssistViewComponent>(null);

    const onPromptRequest = (args: PromptRequestEventArgs) => {
        setTimeout(() => {
            let defaultResponse = 'For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
            assistInstance.current.addPromptResponse(defaultResponse);
          }, 1000);
    };
  
    return (
        // specifies the tag for render the AI AssistView component
        <AIAssistViewComponent id="aiAssistView" ref={assistInstance} promptRequest={onPromptRequest}>
            <ViewsDirective>
                <ViewDirective type='Assist'></ViewDirective>
                <ViewDirective type='Custom'></ViewDirective>
            </ViewsDirective>
        </AIAssistViewComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('container'));

```
{% endraw %}

### Setting name

You can use the `name` property to specifies the header name of the `Assist` or `Custom` views in the AI AssistView.

{% raw %}
```ts

import { AIAssistViewComponent, PromptRequestEventArgs, ViewsDirective, ViewDirective } from '@syncfusion/ej2-react-interactive-chat';
import * as React from 'react';
import * as ReactDOM from "react-dom";

function App() {

    const assistInstance = React.useRef<AIAssistViewComponent>(null);

    const onPromptRequest = (args: PromptRequestEventArgs) => {
        setTimeout(() => {
            let defaultResponse = 'For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
            assistInstance.current.addPromptResponse(defaultResponse);
          }, 1000);
    };
  
    return (
        // specifies the tag for render the AI AssistView component
        <AIAssistViewComponent id="aiAssistView" ref={assistInstance} promptRequest={onPromptRequest}>
            <ViewsDirective>
                <ViewDirective type='Assist' name='Prompt'></ViewDirective>
                <ViewDirective type='Custom' name='Response'></ViewDirective>
            </ViewsDirective>
        </AIAssistViewComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('container'));

```
{% endraw %}

### Setting iconCSS

You can customize the view icons by using the `iconCss` property. By default the `e-assistview-icon` class is added as built-in header icon for the AI AssistView.

{% raw %}
```ts

import { AIAssistViewComponent, PromptRequestEventArgs, ViewsDirective, ViewDirective } from '@syncfusion/ej2-react-interactive-chat';
import * as React from 'react';
import * as ReactDOM from "react-dom";

function App() {

    const assistInstance = React.useRef<AIAssistViewComponent>(null);

    const onPromptRequest = (args: PromptRequestEventArgs) => {
        setTimeout(() => {
            let defaultResponse = 'For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
            assistInstance.current.addPromptResponse(defaultResponse);
          }, 1000);
    };
  
    return (
        // specifies the tag for render the AI AssistView component
        <AIAssistViewComponent id="aiAssistView" ref={assistInstance} promptRequest={onPromptRequest}>
            <ViewsDirective>
                <ViewDirective type='Assist' name='Prompt'></ViewDirective>
                <ViewDirective type='Custom' name='Response' iconCss='e-icons e-comment-show'></ViewDirective>
            </ViewsDirective>
        </AIAssistViewComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('container'));

```
{% endraw %}

The following example illustrates how types, name, and iconCss are used in a AI AssistView component.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ai-assistview/custom-view/type/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ai-assistview/custom-view/type/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/custom-view/type" %}

### Setting view template 

You can use the `viewTemplate` property to add the view content of the multiple views added in the AI AssistView.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ai-assistview/custom-view/viewTemplate/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ai-assistview/custom-view/viewTemplate/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/ai-assistview/custom-view/viewTemplate/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/custom-view/viewTemplate" %}

## Setting active view

You can use the `activeView` property to set the active view in the AI AssistView. By default, the value is `0`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ai-assistview/custom-view/active-view/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ai-assistview/custom-view/active-view/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/custom-view/active-view" %}

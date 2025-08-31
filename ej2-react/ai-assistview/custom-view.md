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

The AI AssistView component supports multiple views that allow you to organize different types of content within the same component.

## Adding custom views

The `ViewsDirective` tag enables you to define a collection of different view models within the AI AssistView component. Each view can be independently customized with different appearances and content.

### Setting view type

You can specify the type of view using the [type](https://ej2.syncfusion.com/react/documentation/api/ai-assistview/assistViewType/) property within the `ViewDirective` tag. It accepts two values such as `Assist`, and `Custom`.

{% raw %}
```ts

import { AIAssistViewComponent, ViewsDirective, ViewDirective } from '@syncfusion/ej2-react-interactive-chat';
import * as React from 'react';
import * as ReactDOM from "react-dom";

function App() {

    return (
        // specifies the tag for render the AI AssistView component
        <AIAssistViewComponent id="aiAssistView">
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

You can use the [name](https://ej2.syncfusion.com/react/documentation/api/ai-assistview/assistViewModel/#name) property to specifies the header name of the `Assist` or `Custom` views in the AI AssistView.

{% raw %}
```ts

import { AIAssistViewComponent, ViewsDirective, ViewDirective } from '@syncfusion/ej2-react-interactive-chat';
import * as React from 'react';
import * as ReactDOM from "react-dom";

function App() {
  
    return (
        // specifies the tag for render the AI AssistView component
        <AIAssistViewComponent id="aiAssistView">
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

### Setting iconCss

You can customize the view icons using the [iconCss](https://ej2.syncfusion.com/react/documentation/api/ai-assistview/assistViewModel/#iconcss) property. By default the `e-assistview-icon` class is added as built-in header icon for the AI AssistView.

{% raw %}
```ts

import { AIAssistViewComponent, ViewsDirective, ViewDirective } from '@syncfusion/ej2-react-interactive-chat';
import * as React from 'react';
import * as ReactDOM from "react-dom";

function App() {
  
    return (
        // specifies the tag for render the AI AssistView component
        <AIAssistViewComponent id="aiAssistView">
            <ViewsDirective>
                <ViewDirective type='Assist' name='Prompt' iconCss='e-assistview-icon'></ViewDirective>
                <ViewDirective type='Custom' name='Response' iconCss='e-comment-show'></ViewDirective>
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
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/ai-assistview/custom-view/type/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/custom-view/type" %}

### Setting view template 

The [viewTemplate](https://ej2.syncfusion.com/react/documentation/api/ai-assistview/assistViewModel/#viewtemplate) property allows to define custom content for multiple views within the AI AssistView.

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

You can use the [activeView](https://ej2.syncfusion.com/react/documentation/api/ai-assistview/#activeview) property to specify which view should be displayed when the AI AssistView component initializes. By default, the first view (index 0) is set as active.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ai-assistview/custom-view/active-view/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ai-assistview/custom-view/active-view/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/ai-assistview/custom-view/active-view/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/custom-view/active-view" %}
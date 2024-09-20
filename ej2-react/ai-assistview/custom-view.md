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

You can set the type of view by using the [type](https://ej2.syncfusion.com/react/documentation/api/ai-assist-view/assistViewType/) property within the `ViewDirective` tag. It accepts two values such as `Assist` and `Custom`.

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

You can use the [name](https://ej2.syncfusion.com/react/documentation/api/ai-assist-view/assistViewModel/#name) property to specifies the header name of the `Assist` or `Custom` views in the AI AssistView.

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

You can customize the view icons by using the [iconCss](https://ej2.syncfusion.com/react/documentation/api/ai-assist-view/assistViewModel/#iconcss) property. By default the `e-assistview-icon` class is added as built-in header icon for the AI AssistView.

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

You can use the [viewTemplate](https://ej2.syncfusion.com/react/documentation/api/ai-assist-view/assistViewModel/#viewtemplate) property to add the view content of the multiple views added in the AI AssistView.

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

You can use the [activeView](https://ej2.syncfusion.com/react/documentation/api/ai-assist-view#activeview) property to set the active view in the AI AssistView. By default, the value is `0`.

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
